<template>
  <div>
    <div class="mui-content">
      <form id="login-form" class="mui-input-group">
        <div class="mui-input-row">
          <label>账号</label>
          <input id="account" type="text" class="mui-input-clear mui-input" placeholder="请输入账号" />
        </div>
        <div class="mui-input-row">
          <label>密码</label>
          <input
            id="password"
            type="password"
            class="mui-input-clear mui-input"
            placeholder="请输入密码"
          />
        </div>
      </form>
      <form class="mui-input-group">
        <ul class="mui-table-view mui-table-view-chevron">
          <li class="mui-table-view-cell right-switch">
            自动登录
            <mt-switch></mt-switch>
          </li>
        </ul>
      </form>
      <div class="mui-content-padded">
        <button id="login" type="button" class="mui-btn mui-btn-block mui-btn-primary">登录</button>
        <div class="link-area">
          <a id="reg">注册账号</a>
          <span class="spliter">|</span>
          <a id="forgetPassword">忘记密码</a>
        </div>
      </div>
      <div class="mui-content-padded oauth-area"></div>
    </div>
  </div>
</template>

<script>
</script>>

<style lang="scss" scoped>
.link-area {
  text-align: center;
  margin-top: 20px;
}
#reg {
  margin-right: 16px;
}
#forgetPassword {
  margin-left: 16px;
}
.mui-content-padded {
  height: 60px;
}
.right-switch {
  display: flex;
  justify-content: space-between;
}

mt-switch {
   margin-right: -20px;
}
.mui-table-view-chevron .mui-table-view-cell {
    padding-right: 20px;
}
</style>