import Vue from "vue";
import Element from "element-ui";
import locale from "element-ui/lib/locale";
import ar from "element-ui/lib/locale/lang/ar";
import en from "element-ui/lib/locale/lang/en";

Vue.use(Element);

locale.use(ar);
// Make Loading Loading cmp Global
import Loading from "~/components/static/loading.vue";
const components = { Loading };
Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component);
});
//
export default function({ app, route }, inject) {
  app.i18n.onBeforeLanguageSwitch = newLocale =>
    newLocale == "ar" ? locale.use(en) : locale.use(ar);

  if (route.fullPath.split("/")[1] == "en") {
    locale.use(en);
  } else {
    locale.use(ar);
  }
}
