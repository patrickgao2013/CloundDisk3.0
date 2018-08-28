import { getCategory, getDocInfo, getSearchResult } from '@/api/file'
const file = {
  state: {
    parentId: '0',
    selectedData: [],
    upload: {
      visible: false,
      type: ''
    },
    deleteVisible: false,
    detailVisible: false,
    versionVisible: false,
    fileList: null,
    folderNav: [],
    PreviewVisible: false,
    docValue: '',
    searchList: null,
    hasSearch: false
  },
  mutations: {
    TOGGLE_UPLOADVISIBLE: (state, data) => {
      state.upload.visible = !state.upload.visible
      state.upload.type = data
    },
    TOGGLE_DELETEVISIBLE: state => {
      state.deleteVisible = !state.deleteVisible
    },
    TOGGLE_DETAILVISIBLE: state => {
      state.detailVisible = !state.detailVisible
    },
    TOGGLE_VERSIONVISIBLE: state => {
      state.versionVisible = !state.versionVisible
    },
    TOGGLE_PREVIEWVISIBLE: state => {
      state.PreviewVisible = !state.PreviewVisible
    },
    GET_CATEGORY: (state, data) => {
      state.fileList = data
    },
    SET_PARENT_ID: (state, data) => {
      state.parentId = data
    },
    SET_FOLDERNAV: (state, data) => {
      state.folderNav = data
    },
    GET_SELECTEDDATA: (state, data) => {
      state.selectedData = data
    },
    GET_DOC_INFO: (state, data) => {
      state.docValue = data
    },
    SETSEARCHLIST: (state, data) => {
      state.searchList = data
    },
    TOGGLE_SEARCH: state => {
      state.hasSearch = !state.hasSearch
    }
  },
  actions: {
    ToggleUploadVisible: ({ commit }, type) => {
      commit('TOGGLE_UPLOADVISIBLE', type)
    },
    ToggleDeleteVisible: ({ commit }) => {
      commit('TOGGLE_DELETEVISIBLE')
    },
    ToggleDetailVisible: ({ commit }) => {
      commit('TOGGLE_DETAILVISIBLE')
    },
    ToggleVersionVisible: ({ commit }) => {
      commit('TOGGLE_VERSIONVISIBLE')
    },
    TogglePreviewVisible: ({ commit }) => {
      commit('TOGGLE_PREVIEWVISIBLE')
    },
    async GetCategory({ commit }, fcategoryid) {
      const Category = await getCategory(fcategoryid)
      commit('GET_CATEGORY', Category.data.tableList)
      commit('SET_FOLDERNAV', Category.data.navList)
    },
    SetParentId: ({ commit }, id) => {
      commit('SET_PARENT_ID', id)
    },
    async Refresh({ commit }) {
      const Category = await getCategory(this.getters.parentId)
      commit('GET_CATEGORY', Category.data.tableList)
      commit('SET_FOLDERNAV', Category.data.navList)
    },
    GetSelectedData({ commit }, data) {
      commit('GET_SELECTEDDATA', data)
    },
    async GetDocInfo({ commit }, fcategoryid) {
      const docInfo = await getDocInfo(fcategoryid)
      commit('GET_DOC_INFO', docInfo.data)
    },
    async SetSearchList({ commit }, queryString) {
      const searchList = await getSearchResult(queryString)
      commit('SETSEARCHLIST', searchList.data)
    },
    ToggleSearch({ commit }) {
      commit('TOGGLE_SEARCH')
    }
  }
}
export default file
