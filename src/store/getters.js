const getters = {
  getToken: state => state.user.token,
  getGcid: state => state.user.gcid,
  getUserId: state => state.user.userid,
  roles: state => state.user.roles,
  getChildRoutes: state => state.routes.childRoutes,
  commonCom: state => state.components.common,
  commonShow: state => state.components.commonShow
}

export default getters