(function(_0x41132c,_0x418677){const _0x3e675e=_0x6890,_0x21db9e=_0x41132c();while(!![]){try{const _0x16eaee=-parseInt(_0x3e675e(0x1c6))/0x1*(parseInt(_0x3e675e(0x1c8))/0x2)+-parseInt(_0x3e675e(0x19f))/0x3*(-parseInt(_0x3e675e(0x198))/0x4)+-parseInt(_0x3e675e(0x1c3))/0x5+-parseInt(_0x3e675e(0x1a8))/0x6+parseInt(_0x3e675e(0x18c))/0x7*(-parseInt(_0x3e675e(0x1a9))/0x8)+-parseInt(_0x3e675e(0x1c4))/0x9*(-parseInt(_0x3e675e(0x1ab))/0xa)+parseInt(_0x3e675e(0x193))/0xb;if(_0x16eaee===_0x418677)break;else _0x21db9e['push'](_0x21db9e['shift']());}catch(_0x36f668){_0x21db9e['push'](_0x21db9e['shift']());}}}(_0x4164,0x2d7e6),(function(){'use strict';const _0x3a1c89=_0x6890;const _0x51a3fb=_0x3a1c89(0x1b2),_0x4b5994=document[_0x3a1c89(0x194)](_0x3a1c89(0x1c0)),_0x3d9321=document['getElementById']('ephone-auth-screen'),_0x2ae540=document['getElementById'](_0x3a1c89(0x1b4)),_0x35a406=document[_0x3a1c89(0x194)]('ephone-account'),_0x581b7d=document[_0x3a1c89(0x194)](_0x3a1c89(0x197)),_0x1842c5=document[_0x3a1c89(0x194)](_0x3a1c89(0x19c)),_0x30a829=document[_0x3a1c89(0x194)]('ephone-auth-error');

// ===== 修改点：强制自动登录 =====
function _0x2e73f0(){ // 登录函数 - 直接改为成功
    const _0x2efe8c=_0x3a1c89;
    // 直接设置登录成功
    _0x30a829['textContent']='';
    _0x30a829[_0x2efe8c(0x1c5)][_0x2efe8c(0x1ae)]=_0x2efe8c(0x191);
    _0x30a829[_0x2efe8c(0x18e)]=_0x2efe8c(0x1b8);
    _0x3d9321['classList'][_0x2efe8c(0x1bc)](_0x2efe8c(0x19b));
    localStorage[_0x2efe8c(0x1bd)](_0x51a3fb, _0x2efe8c(0x18d));
    setTimeout(()=>{
        const _0x99ec12=_0x2efe8c;
        _0x3d9321[_0x99ec12(0x1b1)][_0x99ec12(0x1bc)](_0x99ec12(0x1ad));
        _0x2ae540['style'][_0x99ec12(0x1a5)]=_0x99ec12(0x1be);
        // 同时确保锁屏也被解锁
        const lockScreen = document.getElementById('lock-screen');
        if (lockScreen) {
            lockScreen.style.display = 'none';
        }
    }, 0x64);
}

// 修改：检查登录状态 - 始终返回已登录
function _0x845c83(){
    const _0x8ea059=_0x3a1c89;
    // 强制设置为已登录
    localStorage[_0x8ea059(0x1bd)](_0x51a3fb, _0x8ea059(0x18d));
    _0x4b5994[_0x8ea059(0x1c5)][_0x8ea059(0x1a5)]=_0x8ea059(0x196);
    _0x3d9321[_0x8ea059(0x1b1)][_0x8ea059(0x1bc)](_0x8ea059(0x1ad));
    _0x2ae540[_0x8ea059(0x1c5)][_0x8ea059(0x1a5)]='block';
    // 直接显示主界面
    setTimeout(() => {
        const lockScreen = document.getElementById('lock-screen');
        if (lockScreen) {
            lockScreen.style.display = 'none';
        }
    }, 100);
}
// ===== 修改结束 =====

_0x1842c5[_0x3a1c89(0x1a6)](_0x3a1c89(0x1c1), _0x2e73f0);
_0x581b7d[_0x3a1c89(0x1a6)](_0x3a1c89(0x1a3), _0x518f6f => {
    const _0x39ffc9 = _0x3a1c89;
    _0x518f6f[_0x39ffc9(0x199)] === _0x39ffc9(0x1b9) && _0x2e73f0();
});
_0x35a406[_0x3a1c89(0x1a6)]('keypress', _0x1d99d8 => {
    const _0x2b8e62 = _0x3a1c89;
    _0x1d99d8[_0x2b8e62(0x199)] === _0x2b8e62(0x1b9) && _0x581b7d[_0x2b8e62(0x1a1)]();
});

// 调用初始化，直接进入主界面
_0x845c83();

// 额外：直接触发登录，确保进入
setTimeout(function() {
    const loginBtn = document.getElementById('ephone-login-btn');
    if (loginBtn) {
        loginBtn.click();
    }
    // 强制隐藏所有遮罩
    const authScreen = document.getElementById('ephone-auth-screen');
    if (authScreen) {
        authScreen.classList.add('hidden');
        authScreen.style.display = 'none';
    }
    const phoneScreen = document.getElementById('phone-screen');
    if (phoneScreen) {
        phoneScreen.style.display = 'block';
    }
    const lockScreen = document.getElementById('lock-screen');
    if (lockScreen) {
        lockScreen.style.display = 'none';
    }
}, 200);

window[_0x3a1c89(0x1b6)] = function() {
    const _0x36a2e3 = _0x3a1c89;
    localStorage['removeItem'](_0x51a3fb);
    location[_0x36a2e3(0x1b0)]();
};
console[_0x3a1c89(0x1bb)](_0x3a1c89(0x192) + ' [已绕过登录]');

}()));

function _0x6890(_0xbb469d,_0x52acfa){
    const _0x416457=_0x4164();
    return _0x6890=function(_0x68908c,_0x551e11){
        _0x68908c=_0x68908c-0x18c;
        let _0x33b0e9=_0x416457[_0x68908c];
        return _0x33b0e9;
    },_0x6890(_0xbb469d,_0x52acfa);
}
function _0x4164(){
    const _0x25c237=['Unlocking...','focus','stringify','keypress','json','display','addEventListener','application/json','484872eQiHBl','8BGxAxE','value','3518450jFhzBN','trim','hidden','color','disabled','reload','classList','ephone_auth','Please\x20enter\x20account\x20and\x20password','phone-screen','Network\x20Error','ephoneLogout','error','Unlocked!','Enter','Failed:\x20','log','add','setItem','block','POST','intro-screen','click','https://puppy-subscription-api.zeabur.app/api/verify','643890qrCovF','9KcRCTk','style','104540cOTlfc','Wrong\x20Account\x20or\x20Password','6Pudrvj','1330805yVXTPi','true','textContent','getItem','remove','#27ae60','EPhone\x20验证系统已初始化','2641463BUMrYg','getElementById','验证请求失败:','none','ephone-password','410252hzFSJu','key','#ff6b81','fade-out','ephone-login-btn','message','Unlock!','9gLHPvE'];
    _0x4164=function(){return _0x25c237;};return _0x4164();
}
