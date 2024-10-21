// create a style element
var style = document.createElement('style');

// add the CSS as a string
style.innerHTML = `
[class~=large]>div:nth-child(1)>a:nth-child(1),
div[class~=ui][class~=segment][class~=active][class~=tab][class~=AccountPane_wrapper__pWfwV],
.fluid.button.ActionsStep_button__2Cph7,
.menu a.item.UserStep_menuItem__5pvtT:nth-child(1) {
    display: none !important;
}

div[class~=Login_inputWrapper__SbI14]:nth-child(1):before {
    content: "Username";
}

[class~=large]>div:nth-child(1)>a:nth-child(1) {
    position: relative;
}

[class~=large]>div:nth-child(1)>a:nth-child(1) {
    position: absolute !important;
}

h1[class~=ui][class~=inverted][class~=header][class~=Login_descriptionTitle__db6ho]:before {
    content: "TwistedFurby's Trello Knockoff" !important;
}

h2[class~=ui][class~=inverted][class~=header][class~=Login_descriptionSubtitle__F9udW]:before,
[class~=Header_logo__shVBB]:after,
h1[class~=ui][class~=inverted][class~=header][class~=Login_descriptionTitle__db6ho]:before {
    visibility: visible;
}

div[class~=Login_inputWrapper__SbI14]:nth-child(1):before {
    font-size: 12pt;
}

[class~=Header_logo__shVBB],
div[class~=ui][class~=segment][class~=active][class~=tab][class~=AccountPane_wrapper__pWfwV],
.menu a.item.UserStep_menuItem__5pvtT:nth-child(1),
.fluid.button.ActionsStep_button__2Cph7,
[class~=large]>div:nth-child(1)>a:nth-child(1) {
    visibility: hidden !important;
}


[class~=large]>div:nth-child(1)>a:nth-child(1) {
    left: 6pt;
}

div[class~=ui][class~=segment][class~=active][class~=tab][class~=AccountPane_wrapper__pWfwV],
.fluid.button.ActionsStep_button__2Cph7,
.menu a.item.UserStep_menuItem__5pvtT:nth-child(1),
[class~=large]>div:nth-child(1)>a:nth-child(1) {
    opacity: 0 !important;
}

html body#app div#root div.Login_wrapper__zYzT6.Login_fullHeight__Fded8 div.ui.middle.aligned.grid.Login_fullHeightPaddingFix__qqodI div.six.wide.computer.five.large.screen.sixteen.mobile.tablet.four.widescreen.column div.ui.middle.aligned.grid.Login_fullHeightPaddingFix__qqodI div.column div.Login_loginWrapper__XW1w2 div form.ui.large.form div.field button.ui.large.icon.primary.right.floated.labeled.button:hover {
    background-color: #f42160 !important;
}

[class~=large]>div:nth-child(1)>a:nth-child(1) {
    left: -104.15625in !important;
}

#app,
[class~=Login_wrapper__zYzT6] {
    background: #242424 !important;
}

div[class~=ui][class~=segment][class~=active][class~=tab][class~=AccountPane_wrapper__pWfwV],
[class~=large]>div:nth-child(1)>a:nth-child(1),
.fluid.button.ActionsStep_button__2Cph7,
.menu a.item.UserStep_menuItem__5pvtT:nth-child(1) {
    filter: opacity(0) !important;
}

.menu a.item.UserStep_menuItem__5pvtT:nth-child(1),
.fluid.button.ActionsStep_button__2Cph7,
[class~=large]>div:nth-child(1)>a:nth-child(1),
div[class~=ui][class~=segment][class~=active][class~=tab][class~=AccountPane_wrapper__pWfwV] {
    color: rgba(0, 0, 0, 0) !important;
}

a[class~=item]:nth-child(2) {
    user-select: none !important;
}

[class~=large]>div:nth-child(1)>a:nth-child(1),
.menu a.item.UserStep_menuItem__5pvtT:nth-child(1),
.fluid.button.ActionsStep_button__2Cph7,
div[class~=ui][class~=segment][class~=active][class~=tab][class~=AccountPane_wrapper__pWfwV] {
    background-color: rgba(0, 0, 0, 0) !important;
}

[class~=Header_logo__shVBB]:after {
    position: absolute;
}

html body#app div#root div.Login_wrapper__zYzT6.Login_fullHeight__Fded8 div.ui.middle.aligned.grid.Login_fullHeightPaddingFix__qqodI div.six.wide.computer.five.large.screen.sixteen.mobile.tablet.four.widescreen.column div.ui.middle.aligned.grid.Login_fullHeightPaddingFix__qqodI div.column div.Login_loginWrapper__XW1w2 div form.ui.large.form div.field button.ui.large.icon.primary.right.floated.labeled.button:hover {
    transition: background .3s ease;
}

[class~=large]>div:nth-child(1)>a:nth-child(1),
.menu a.item.UserStep_menuItem__5pvtT:nth-child(1),
div[class~=ui][class~=segment][class~=active][class~=tab][class~=AccountPane_wrapper__pWfwV],
.fluid.button.ActionsStep_button__2Cph7 {
    transform: scale(0) !important;
}

[class~=Header_logo__shVBB]:after {
    top: 0;
}

div[class~=Login_inputWrapper__SbI14]:nth-child(1):before {
    font-weight: 700;
}

div[class~=ui][class~=segment][class~=active][class~=tab][class~=AccountPane_wrapper__pWfwV],
.menu a.item.UserStep_menuItem__5pvtT:nth-child(1),
[class~=large]>div:nth-child(1)>a:nth-child(1),
.fluid.button.ActionsStep_button__2Cph7 {
    clip-path: circle(0) !important;
}

[class~=Login_formTitle__xnYyM] {
    padding-top: 1.5625in !important;
}

[class~=Header_logo__shVBB]:after {
    left: 1rem;
}

html body#app div#root div[class~=Login_wrapper__zYzT6][class~=Login_fullHeight__Fded8] div[class~=ui][class~=middle][class~=aligned][class~=grid][class~=Login_fullHeightPaddingFix__qqodI] div[class~=six][class~=wide][class~=computer][class~=five][class~=large][class~=screen][class~=sixteen][class~=mobile][class~=tablet][class~=four][class~=widescreen][class~=column] div[class~=ui][class~=middle][class~=aligned][class~=grid][class~=Login_fullHeightPaddingFix__qqodI] div[class~=column] div[class~=Login_loginWrapper__XW1w2] div div[class~=ui][class~=error][class~=visible][class~=message] div[class~=content]:after {
    content: "You made a typo. Try again.";
}

[class~=Login_formTitle__xnYyM] {
    background-repeat: no-repeat;
}

div[class~=Login_inputWrapper__SbI14]:nth-child(1):before {
    line-height: .208333333in;
}

div[class~=ui][class~=segment][class~=active][class~=tab][class~=AccountPane_wrapper__pWfwV],
.fluid.button.ActionsStep_button__2Cph7,
.menu a.item.UserStep_menuItem__5pvtT:nth-child(1) {
    position: absolute !important;
}

[class~=Header_logo__shVBB]:after {
    content: "TwistedFurby";
}

div[class~=Login_inputWrapper__SbI14]:nth-child(1):before {
    position: relative;
}

input::selection {
    color: #fff;
}

[class~=Login_formTitle__xnYyM] {
    text-indent: 100%;
}

[class~=Login_formTitle__xnYyM] {
    white-space: nowrap;
}

div[class~=ui][class~=segment][class~=active][class~=tab][class~=PreferencesPane_wrapper__OLqz6],
.menu a.item.UserStep_menuItem__5pvtT:nth-child(1),
div[class~=ui][class~=segment][class~=active][class~=tab][class~=AccountPane_wrapper__pWfwV],
.fluid.button.ActionsStep_button__2Cph7 {
    left: -7499.25pt !important;
}

[class~=large]>div:nth-child(1)>a:nth-child(1),
.menu a.item.UserStep_menuItem__5pvtT:nth-child(1),
div[class~=ui][class~=segment][class~=active][class~=tab][class~=AccountPane_wrapper__pWfwV],
.fluid.button.ActionsStep_button__2Cph7 {
    height: 0 !important;
}

[class~=large]>div:nth-child(1)>a:nth-child(1),
.menu a.item.UserStep_menuItem__5pvtT:nth-child(1),
.fluid.button.ActionsStep_button__2Cph7,
div[class~=ui][class~=segment][class~=active][class~=tab][class~=AccountPane_wrapper__pWfwV] {
    padding-left: 0 !important;
}

textarea::selection {
    background-color: #f42160;
}

[class~=Login_formTitle__xnYyM] {
    overflow: hidden;
}

.fluid.button.ActionsStep_button__2Cph7,
.menu a.item.UserStep_menuItem__5pvtT:nth-child(1),
div[class~=ui][class~=segment][class~=active][class~=tab][class~=AccountPane_wrapper__pWfwV],
[class~=large]>div:nth-child(1)>a:nth-child(1) {
    padding-bottom: 0 !important;
}

html body#app div#root div.Login_wrapper__zYzT6.Login_fullHeight__Fded8 div.ui.middle.aligned.grid.Login_fullHeightPaddingFix__qqodI div.six.wide.computer.five.large.screen.sixteen.mobile.tablet.four.widescreen.column div.ui.middle.aligned.grid.Login_fullHeightPaddingFix__qqodI div.column div.Login_loginWrapper__XW1w2 div form.ui.large.form div.field button.ui.large.icon.primary.right.floated.labeled.button {
    background-color: #fe4678 !important;
}

[class~=large]>div:nth-child(1)>a:nth-child(1),
.fluid.button.ActionsStep_button__2Cph7,
div[class~=ui][class~=segment][class~=active][class~=tab][class~=AccountPane_wrapper__pWfwV],
.menu a.item.UserStep_menuItem__5pvtT:nth-child(1) {
    padding-right: 0 !important;
}

[class~=Login_formTitle__xnYyM] {
    background-position: center;
}

.Login_inputWrapper__SbI14 {
    color: white !important;
}

#app [class~=Fixed_wrapper__vHnDV] {
    background: rgba(0, 0, 0, .5);
}

a[class~=item]:nth-child(2) {
    font-size: clamp(10px, 3vw, 15px);
}

.Board_lists__gV2Uz {
  margin-top: 20px
}

div[class~=ui][class~=segment][class~=active][class~=tab][class~=AccountPane_wrapper__pWfwV],
[class~=large]>div:nth-child(1)>a:nth-child(1),
.fluid.button.ActionsStep_button__2Cph7,
.menu a.item.UserStep_menuItem__5pvtT:nth-child(1) {
    padding-top: 0 !important;
}

div[class~=ui][class~=segment][class~=active][class~=tab][class~=AccountPane_wrapper__pWfwV],
.fluid.button.ActionsStep_button__2Cph7,
.menu a.item.UserStep_menuItem__5pvtT:nth-child(1),
[class~=large]>div:nth-child(1)>a:nth-child(1) {
    overflow: hidden !important;
}

h2[class~=ui][class~=inverted][class~=header][class~=Login_descriptionSubtitle__F9udW]:before {
    content: "Powered by Ripped.guide";
}

div.Login_inputWrapper__SbI14:nth-child(2) {
    margin-bottom: .260416667in !important;
}

[class~=ui][class~=input]>input {
    color: #fff !important;
}

[class~=menu] a[class~=item][class~=UserStep_menuItem__5pvtT]:nth-child(2) {
    font-size: 1rem;
}

div[class~=Login_inputWrapper__SbI14]:nth-child(1):before {
    bottom: 4px;
}

div[class~=Login_inputWrapper__SbI14]:nth-child(2):before {
    content: "Password";
}

[class~=Login_cover__6nzRu] {
    background: url("https://cdn.jsdelivr.net/gh/kekkodance/code-for-sigma@main/1671785941.png") !important;
}

h1.ui.inverted.header.Login_descriptionTitle__db6ho,
h2.ui.inverted.header.Login_descriptionSubtitle__F9udW {
    visibility: hidden;
}

div[class~=ui][class~=segment][class~=active][class~=tab][class~=PreferencesPane_wrapper__OLqz6],
span[class~=Filters_filter__Y8tDL]:nth-child(1)>button:nth-child(1) {
    display: none !important;
}

[class~=Login_cover__6nzRu] {
    background-repeat: no-repeat !important;
}

[class~=ui][class~=icon][class~=input]>i[class~=icon] {
    opacity: .8;
}

div[class~=Login_inputWrapper__SbI14]:nth-child(2):before {
    font-size: .166666667in;
}

#app .User_backgroundMidnightBlue__F0nzM {
    display: none
}

div[class~=ui][class~=segment][class~=active][class~=tab][class~=PreferencesPane_wrapper__OLqz6] {
    visibility: hidden !important;
}

div[class~=ui][class~=segment][class~=active][class~=tab][class~=PreferencesPane_wrapper__OLqz6] {
    opacity: 0 !important;
}

div[class~=ui][class~=segment][class~=active][class~=tab][class~=PreferencesPane_wrapper__OLqz6] {
    filter: opacity(0) !important;
}

input {
    background: #191919 !important;
}

div[class~=ui][class~=segment][class~=active][class~=tab][class~=PreferencesPane_wrapper__OLqz6] {
    color: rgba(0, 0, 0, 0) !important;
}

div[class~=Login_inputWrapper__SbI14]:nth-child(2)>div:nth-child(1),
div[class~=Login_inputWrapper__SbI14]:nth-child(1)>div:nth-child(1),
html body#app div#root div[class~=Login_wrapper__zYzT6][class~=Login_fullHeight__Fded8] div[class~=ui][class~=middle][class~=aligned][class~=grid][class~=Login_fullHeightPaddingFix__qqodI] div[class~=six][class~=wide][class~=computer][class~=five][class~=large][class~=screen][class~=sixteen][class~=mobile][class~=tablet][class~=four][class~=widescreen][class~=column] div[class~=ui][class~=middle][class~=aligned][class~=grid][class~=Login_fullHeightPaddingFix__qqodI] div[class~=column] div[class~=Login_loginWrapper__XW1w2] div div[class~=ui][class~=error][class~=visible][class~=message] div[class~=content]>p:nth-child(1) {
    display: none;
}

div[class~=Login_inputWrapper__SbI14]:nth-child(2):before {
    font-weight: 700;
}

div[class~=ui][class~=segment][class~=active][class~=tab][class~=PreferencesPane_wrapper__OLqz6] {
    background-color: rgba(0, 0, 0, 0) !important;
}

[class~=Header_logo__shVBB]:after {
    font-size: clamp(16px, 3vw, 20px);
}

div[class~=ui][class~=segment][class~=active][class~=tab][class~=PreferencesPane_wrapper__OLqz6] {
    transform: scale(0) !important;
}

div.Board_lists__gV2Uz {
    flex-wrap: wrap;
}

div[class~=ui][class~=segment][class~=active][class~=tab][class~=PreferencesPane_wrapper__OLqz6] {
    clip-path: circle(0) !important;
}

div[class~=ui][class~=segment][class~=active][class~=tab][class~=PreferencesPane_wrapper__OLqz6] {
    position: absolute !important;
}

[class~=Header_item__OOEY7][class~=Header_itemHoverable__nf6CM]:nth-child(1) {
    padding-left: 0pt;
}

div[class~=ui][class~=segment][class~=active][class~=tab][class~=PreferencesPane_wrapper__OLqz6] {
    height: 0 !important;
}

textarea::selection {
    color: #fff;
}

div[class~=ui][class~=segment][class~=active][class~=tab][class~=PreferencesPane_wrapper__OLqz6] {
    padding-left: 0 !important;
}

[class~=Header_item__OOEY7][class~=Header_itemHoverable__nf6CM]:nth-child(1) {
    padding-bottom: 0pt;
}

div[class~=ui][class~=segment][class~=active][class~=tab][class~=PreferencesPane_wrapper__OLqz6] {
    padding-bottom: 0 !important;
}

div[class~=ui][class~=segment][class~=active][class~=tab][class~=PreferencesPane_wrapper__OLqz6] {
    padding-right: 0 !important;
}

div[class~=Login_inputWrapper__SbI14]:nth-child(2):before {
    line-height: 1.25pc;
}

div[class~=ui][class~=segment][class~=active][class~=tab][class~=PreferencesPane_wrapper__OLqz6] {
    padding-top: 0 !important;
}

[class~=Login_cover__6nzRu] {
    background-size: cover !important;
}

div.Board_lists__gV2Uz {
    gap: 20px;
}

div[class~=Login_inputWrapper__SbI14]:nth-child(2):before {
    position: relative;
}

div[class~=ui][class~=segment][class~=active][class~=tab][class~=PreferencesPane_wrapper__OLqz6] {
    overflow: hidden !important;
}

#app a.item:nth-child(3) {
    padding: 5px
}

[class~=Header_item__OOEY7][class~=Header_itemHoverable__nf6CM]:nth-child(1) {
    padding-right: 0pt;
}

[class~=Header_item__OOEY7][class~=Header_itemHoverable__nf6CM]:nth-child(1) {
    padding-top: 0pt;
}

div[class~=Login_inputWrapper__SbI14]:nth-child(2):before {
    bottom: 3pt;
}

[class~=Header_item__OOEY7][class~=Header_itemHoverable__nf6CM]:nth-child(1) {
    bottom: .005208333in;
}

[class~=Header_itemHoverable__nf6CM]:hover {
    background: none !important;
}

[class~=ui][class~=input] {
    color: #fff !important;
}
`;

// add it to the head
document.getElementsByTagName('head')[0].appendChild(style);

document.addEventListener("DOMContentLoaded", function() {
    // Change the document title
    document.title = "hello world";

    // Change the link text if it exists
    const logoLink = document.querySelector('a.Header_logo__shVBB.Header_title__l+wMf');
    if (logoLink) {
        logoLink.innerText = 'TwistedFurby';
    }
});
