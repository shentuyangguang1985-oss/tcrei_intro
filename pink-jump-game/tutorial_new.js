// ── TUTORIAL ──
function drawFairy(x, y) {
  var fx = x, fy = y;
  tFairyAnim += 0.04;
  var bob = Math.sin(tFairyAnim)*3;
  ctx.fillStyle = 'rgba(255,220,240,0.3)';
  ctx.beginPath(); ctx.arc(fx+4, fy-2+bob, 16, 0, Math.PI*2); ctx.fill();
  var wf = Math.sin(tFairyAnim*2.5)*5;
  ctx.fillStyle = 'rgba(255,200,230,0.8)';
  ctx.beginPath(); ctx.ellipse(fx-6, fy-6+bob+wf, 10, 14, -0.3, 0, Math.PI*2); ctx.fill();
  ctx.fillStyle = 'rgba(200,230,255,0.6)';
  ctx.beginPath(); ctx.ellipse(fx-4, fy-4+bob+wf*0.7, 7, 10, -0.3, 0, Math.PI*2); ctx.fill();
  ctx.fillStyle = 'rgba(255,200,230,0.8)';
  ctx.beginPath(); ctx.ellipse(fx+12, fy-6+bob-wf, 10, 14, 0.3, 0, Math.PI*2); ctx.fill();
  ctx.fillStyle = 'rgba(200,230,255,0.6)';
  ctx.beginPath(); ctx.ellipse(fx+10, fy-4+bob-wf*0.7, 7, 10, 0.3, 0, Math.PI*2); ctx.fill();
  FR(fx-1, fy+bob, 8, 10, '#FFB3C6'); FR(fx, fy+bob, 6, 8, '#FFD0DD');
  ctx.fillStyle = '#FFD0DD';
  ctx.beginPath(); ctx.moveTo(fx-1, fy+10+bob); ctx.lineTo(fx-4, fy+17+bob); ctx.lineTo(fx+10, fy+17+bob); ctx.lineTo(fx+7, fy+10+bob); ctx.fill();
  ctx.fillStyle = '#FFB3C6';
  ctx.beginPath(); ctx.moveTo(fx, fy+11+bob); ctx.lineTo(fx-2, fy+16+bob); ctx.lineTo(fx+8, fy+16+bob); ctx.lineTo(fx+6, fy+11+bob); ctx.fill();
  FR(fx, fy-8+bob, 8, 9, '#FFE0E8'); FR(fx+1, fy-7+bob, 6, 7, '#FFF0F5');
  ctx.fillStyle = '#FF80AB';
  ctx.beginPath(); ctx.arc(fx+4, fy-10+bob, 6, Math.PI, 2*Math.PI); ctx.fill();
  FR(fx, fy-12+bob, 3, 4, '#FF80AB'); FR(fx+5, fy-12+bob, 3, 4, '#FF80AB');
  FR(fx-1, fy-10+bob, 2, 6, '#FF80AB'); FR(fx+7, fy-10+bob, 2, 6, '#FF80AB');
  FR(fx+2, fy-6+bob, 3, 3, '#FFF'); FR(fx+5, fy-6+bob, 3, 3, '#FFF');
  FR(fx+3, fy-5+bob, 2, 2, '#2D1B2E'); FR(fx+6, fy-5+bob, 2, 2, '#2D1B2E');
  FR(fx+3, fy-6+bob, 1, 1, '#FFF'); FR(fx+6, fy-6+bob, 1, 1, '#FFF');
  FR(fx+1, fy-3+bob, 2, 1, 'rgba(255,150,180,0.5)'); FR(fx+6, fy-3+bob, 2, 1, 'rgba(255,150,180,0.5)');
  ctx.fillStyle = '#E06080'; FR(fx+3, fy-2+bob, 3, 1, '#E06080');
  FR(fx+8, fy-4+bob, 1, 10, '#FFD700');
  ctx.fillStyle = '#FFE44D'; FR(fx+6, fy-6+bob, 5, 5, '#FFE44D'); FR(fx+7, fy-7+bob, 3, 3, '#FFF');
  ctx.fillStyle = '#FF80AB'; ctx.font = 'bold 9px monospace'; ctx.textAlign = 'center';
  ctx.fillText('yan', fx+4, fy+22+bob); ctx.textAlign = 'start';
}

function startTutorial(stage) {
  initAudio(); resize();
  tStage = stage; tPhase = 0;
  player.reset(); obstacles = []; particles = [];
  bossProjectiles = []; playerProjectiles = [];
  obstaclesPassed = 0; bossActive = false; bossFought = false;
  shakeAmt = 0; invincibleTimer = 0;
  gameState = STATE.TUTORIAL;
  hideAllOverlays();
  if (!bgmPlaying) playBGM('normal');
  tFairyX = W - 80; tFairyY = GROUND_Y - 60;
  setTDialogue(tDialogues[tStage][0]);
  if (animId) cancelAnimationFrame(animId);
  tutorialLoop();
}

function startTPlay() {
  gameState = STATE.TUTORIAL_PLAY;
  obstacles = []; particles = [];
  player.reset(); obstaclesPassed = 0;
  bossActive = false; bossProjectiles = []; playerProjectiles = [];
  invincibleTimer = 0;
  if (tStage === 0) {
    obstacles.push({x:W+40,y:GROUND_Y-36,w:22,h:36,draw:drawSpike,passed:false});
    obstacles.push({x:W+170,y:GROUND_Y-56,w:26,h:56,draw:drawBlock,passed:false});
  } else if (tStage === 1) {
    obstacles.push({x:W+40,y:GROUND_Y-30,w:60,h:14,draw:drawBarrier,passed:false});
    obstacles.push({x:W+190,y:GROUND_Y-30,w:40,h:14,draw:drawLowBird,passed:false});
  } else {
    bossActive = true; bossType = 0;
    bossX = W - 100; bossY = GROUND_Y - bossH;
    bossProjectiles = []; playerProjectiles = [];
    bossTimer = 0; tBossShootTimer = 0;
    tutorialBossHP = 30;
  }
}

function tutorialLoop() {
  if (gameState !== STATE.TUTORIAL && gameState !== STATE.TUTORIAL_PLAY) return;
  updateClouds();
  if (gameState === STATE.TUTORIAL) {
    drawBackground(); drawClouds(); drawFlowers();
    for (var i = 0; i < obstacles.length; i++) obstacles[i].draw(obstacles[i]);
    for (var i = 0; i < bossProjectiles.length; i++) {
      var p = bossProjectiles[i];
      FR(p.x-p.r,p.y-p.r,p.r*2,p.r*2,'#4488FF');FR(p.x-p.r+1,p.y-p.r+1,p.r*2-2,p.r*2-2,'#66AAFF');FR(p.x-2,p.y-2,4,4,'#FFF');
    }
    drawParticles(); player.draw();
    if (bossActive) drawBoss();
    ctx.fillStyle = 'rgba(0,0,0,0.55)'; ctx.fillRect(0, 0, W, H);
    drawFairy(tFairyX, tFairyY);
    drawTDialogue(); updateTDialogue();
  } else if (gameState === STATE.TUTORIAL_PLAY) {
    player.update();
    var spd = 5.5;
    for (var i = obstacles.length-1; i >= 0; i--) {
      obstacles[i].x -= spd;
      if (obstacles[i].x + obstacles[i].w < -40) obstacles.splice(i,1);
      else if (!obstacles[i].passed && obstacles[i].x + obstacles[i].w < player.x - player.r) {
        obstacles[i].passed = true; obstaclesPassed++;
      }
    }
    if (tStage === 2) {
      updateTutorialBoss();
      for (var i = playerProjectiles.length-1; i >= 0; i--) {
        var p = playerProjectiles[i]; p.x += p.vx; p.y += p.vy; p.life--;
        if (p.x > W+20 || p.life <= 0) { playerProjectiles.splice(i,1); continue; }
        if (p.x+p.r > bossX && p.x-p.r < bossX+bossW && p.y+p.r > bossY && p.y-p.r < bossY+bossH) {
          tutorialBossHP -= 3; playerProjectiles.splice(i,1); sfxBossHit();
          if (tutorialBossHP <= 0) { tutorialWin(); return; }
        }
      }
    }
    updateParticles();
    drawBackground(); drawClouds(); drawFlowers();
    for (var i = 0; i < obstacles.length; i++) obstacles[i].draw(obstacles[i]);
    for (var i = 0; i < bossProjectiles.length; i++) {
      var p = bossProjectiles[i];
      FR(p.x-p.r,p.y-p.r,p.r*2,p.r*2,'#4488FF');FR(p.x-p.r+1,p.y-p.r+1,p.r*2-2,p.r*2-2,'#66AAFF');FR(p.x-2,p.y-2,4,4,'#FFF');
    }
    for (var i = 0; i < playerProjectiles.length; i++) {
      var p = playerProjectiles[i];
      FR(p.x-p.r,p.y-p.r,p.r*2,p.r*2,'#FFD0DD');FR(p.x-p.r+1,p.y-p.r+1,p.r*2-2,p.r*2-2,'#FFF');
    }
    drawParticles(); player.draw();
    if (bossActive) { drawBoss(); drawTutorialBossBar(); }
    if (tStage <= 1 && obstaclesPassed >= 2 && obstacles.length === 0) { tutorialWin(); return; }
    for (var i = 0; i < obstacles.length; i++) {
      if (hitTest(player, obstacles[i])) { tutorialFail(); return; }
    }
    for (var i = 0; i < bossProjectiles.length; i++) {
      var p = bossProjectiles[i]; var pb = player.getBounds();
      if (p.x-p.r < pb.right && p.x+p.r > pb.left && p.y-p.r < pb.bottom && p.y+p.r > pb.top) {
        tutorialFail(); return;
      }
    }
  }
  animId = requestAnimationFrame(tutorialLoop);
}

function tutorialWin() {
  player.reset(); obstacles = []; bossProjectiles = []; playerProjectiles = [];
  bossActive = false;
  if (tStage === 2) {
    totalCoins += 20; saveCoins();
    coinCountEl.textContent = totalCoins;
    if (unlockedLevel < 1) { unlockedLevel = 1; localStorage.setItem('pjUnlocked', '1'); }
    gameState = STATE.TUTORIAL;
    setTDialogue(tWinMsg);
    // After dialogue, win screen
    (function waitForWin() {
      if (gameState !== STATE.TUTORIAL) return;
      drawBackground(); drawClouds(); drawFlowers();
      ctx.fillStyle = 'rgba(0,0,0,0.55)'; ctx.fillRect(0, 0, W, H);
      drawFairy(tFairyX, tFairyY);
      drawTDialogue(); updateTDialogue();
      var full = tDialogue.join('');
      if (tCharIdx >= full.length && Math.floor(Date.now()/500)%2 === 0) {
        ctx.fillStyle = '#FFD0DD'; ctx.font = '10px monospace'; ctx.textAlign = 'center';
        ctx.fillText('[ 按空格完成 ]', W/2, H/2+50); ctx.textAlign = 'start';
      }
      animId = requestAnimationFrame(waitForWin);
    })();
    return;
  }
  // st1/st2: brief congrats then back
  gameState = STATE.IDLE;
  if (animId) cancelAnimationFrame(animId);
  hideAllOverlays();
  startScreen.classList.add('show');
  buildLevelGrid();
}

function tutorialFail() {
  player.reset(); obstacles = []; bossProjectiles = []; playerProjectiles = [];
  bossActive = false;
  gameState = STATE.OVER;
  if (animId) cancelAnimationFrame(animId);
  sfxHit(); triggerShake();
  emitParticles(player.x, player.y, 20, '#FFF', 3);
  emitParticles(player.x, player.y, 10, '#FF4088', 2);
  finalScoreEl.textContent = '0';
  goLevelEl.textContent = 'st'+(tStage+1);
  hideAllOverlays();
  gameOverScreen.classList.add('show');
}

function updateTDialogue() {
  var full = tDialogue.join('');
  if (tCharIdx >= full.length) return;
  tCharTimer++;
  if (tCharTimer >= 2) { tCharTimer = 0; tCharIdx++; beep(800+Math.random()*400,0.03,'square',0.008); }
}

function drawTDialogue() {
  var full = tDialogue.join('');
  var shown = full.substring(0, tCharIdx);
  if (shown.length === 0) return;
  var bw = 420, bh = 32, bx = Math.floor(W/2 - bw/2), by = Math.floor(H/2 - bh/2);
  ctx.fillStyle = 'rgba(0,0,0,0.75)'; ctx.fillRect(bx, by, bw, bh);
  ctx.strokeStyle = '#FF80AB'; ctx.lineWidth = 2; ctx.strokeRect(bx, by, bw, bh);
  ctx.fillStyle = '#FFF'; ctx.font = 'bold 13px monospace'; ctx.textAlign = 'center';
  ctx.fillText(shown, W/2, by+21); ctx.textAlign = 'start';
  if (tCharIdx >= full.length && Math.floor(Date.now()/500)%2 === 0) {
    ctx.fillStyle = '#FFD0DD'; ctx.font = '10px monospace';
    ctx.fillText('[ 按空格继续 ]', W/2, by+bh+14);
  }
}

function advanceTDialogue() {
  var full = tDialogue.join('');
  if (tCharIdx < full.length) { tCharIdx = full.length; return; }
  // Handle st3 win message
  if (tStage === 2 && tDialogue[0] === tWinMsg[0]) {
    sfxWin(); stopBGM();
    gameState = STATE.IDLE;
    winLevelEl.textContent = '教程';
    winRewardEl.textContent = '20';
    hideAllOverlays(); winScreen.classList.add('show');
    btnNext.style.display = 'none';
    buildLevelGrid();
    if (animId) cancelAnimationFrame(animId);
    return;
  }
  tPhase++;
  var dials = tDialogues[tStage];
  if (tPhase < dials.length) {
    setTDialogue(dials[tPhase]);
  } else {
    startTPlay();
  }
}

function drawTutorialBossBar() {
  var bw = 200, bh = 14, bx = Math.floor(W/2-bw/2), by = 14;
  FR(bx-2,by-2,bw+4,bh+4,'#C03050');FR(bx,by,bw,bh,'#3D2035');
  var fw = Math.floor(bw*(tutorialBossHP/30));
  if (fw>0) FR(bx,by,fw,bh,'#FF6090');
  ctx.fillStyle='#FFF';ctx.font='bold 9px monospace';ctx.textAlign='center';
  ctx.fillText('BOSS '+tutorialBossHP+'/30',bx+bw/2,by+11);ctx.textAlign='start';
}

function updateTutorialBoss() {
  bossTimer++;
  bossY = GROUND_Y - bossH + Math.sin(bossTimer*0.03)*20;
  tBossShootTimer++;
  if (tBossShootTimer >= 70) {
    tBossShootTimer = 0;
    var dx = player.x - bossX, dy = player.y - bossY;
    var dist = Math.sqrt(dx*dx+dy*dy)||1;
    bossProjectiles.push({x:bossX-10,y:bossY+bossH/2,vx:(dx/dist)*3,vy:(dy/dist)*3,r:5,life:200});
  }
  for (var i = bossProjectiles.length-1; i >= 0; i--) {
    var p = bossProjectiles[i]; p.x += p.vx; p.y += p.vy; p.life--;
    if (p.x < -20 || p.life <= 0) bossProjectiles.splice(i,1);
  }
}
