import Vue from "vue";

export default function({ $axios, i18n }) {
  $axios.onRequest(config => {
    config.headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Accept-Language": i18n.localeProperties.code == "ar" ? "ar-SA" : "en-US",
      // AccessToken
      Authorization: localStorage.getItem("accessToken")
        ? "Bearer " + localStorage.getItem("accessToken")
        : null
    };
  });
  $axios.onError(error => {
    if (error.response && error.response.status === 500) {
      Vue.prototype.$notify.error({
        title: "Error",
        message: "هناك  خطأ من السيرفر",
        showClose: false,
        position: "bottom-right"
      });
      Vue.prototype.$message.error(error.response.data.Message);
    }
  });
}
