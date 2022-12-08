export const state = () => ({
  report: {},
  reportDialog: false,
});
export const mutations = {
  setHeaderToReport(state, payload) {
    state.report.PageHeader = payload.PageHeader;
  },
  setReportResponse(state, payload) {
    state.report = payload;
  },
  setReportConnectionString(state, payload) {
    state.report.DataSources.forEach( connect => {
      if(connect.Name === 'DataSource'){
        connect.ConnectionProperties.ConnectString = payload
      }
    })
    // state.report.DataSources[2].ConnectionProperties.ConnectString = payload
  },
  setReportDataSet(state, payload) {
    state.report.DataSets.forEach(dataSet => {
      if(dataSet.Name === 'DataSet'){
        dataSet.Query.CommandText = payload;
      }
    })

  },
  setReportBranchName(state, payload) {
    let ReportItems=state.report.Body.ReportItems
    ReportItems.forEach((item) =>{
      if(item.Name === "branchName"){
        item.Value = payload
      }
    })
  },
  setReportLevelAccount(state, payload) {
    let ReportItems=state.report.Body.ReportItems
    ReportItems.forEach((item) =>{
      if(item.Name === "levelAccount"){
        item.Value = payload
      }
    })
  },
  setReportCostCenterName(state , payload){
    let ReportItems = state.report.Body.ReportItems
    let item = ReportItems.find(item =>{
      return item.Name ==="mname"
    })
    item.Value=payload
  },
  setReportMovementTypeName(state , payload){
    let ReportItems = state.report.Body.ReportItems
    let item = ReportItems.find(item =>{
      return item.Name ==="mddname"
    })
    item.Value=payload
  },
  setReportDialogState(state, payload) {
    state.reportDialog = payload;
  },
  setViewer(state, payload) {
    state.viewer = payload;
  },
};
export const actions = {
  //assigen page header of HeaderReport to the report
  async assignHeaderToReport({ commit }, path) {
    let headerReport = await fetch(path); // get the report (JSON)
    let headerReportResponse = await headerReport.json();
    commit("setHeaderToReport",headerReportResponse)
  },
  //add data to the report and call assignHeaderToReport() function
  async assignDataToReport({ commit , dispatch, state }, data) {
    let reportPath = data.reportPath;
    let report = await fetch(reportPath);
    let reportResponse = await report.json();
    commit("setReportResponse",reportResponse);
    await dispatch('assignHeaderToReport',data.headerPath);
    commit("setReportConnectionString",data.connString)
    commit("setReportDataSet",data.dataSet)
    if(data.branchName){
      commit("setReportBranchName",data.branchName)
    }
    if(data.levelAcc){
      commit("setReportLevelAccount",data.levelAcc)
    }
    if(data.costCenterName){
      
      commit("setReportCostCenterName",data.costCenterName)
    }
    if(data.movementTypeName){
      commit("setReportMovementTypeName",data.movementTypeName)
    }
    
    return state.report
  },
  //open dialog as it send true to setReportDialogState
  //dispatch the function assigen data to report
  async showReport({ dispatch, commit ,state}, data) {
    await dispatch("assignDataToReport",data);
    commit("setReportDialogState",true)
    return state.report
  }
};
