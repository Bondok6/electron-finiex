export default async ctx => {
  if (ctx.store.state.General.auth.loggedIn) {
    if (ctx.route.path === "/login") {
      ctx.redirect("/accounting/accounts-card/new");
    } else {
    }
  } else {
    if (ctx.route.path === "/login") {
    } else {
      // skip Middleware
      ctx.redirect("/login");
    }
  }
};
