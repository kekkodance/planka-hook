// create a style element
var style = document.createElement('style');

// add the CSS as a string
style.innerHTML = `
//DARK THEME SCHEDE START

#app .Stopwatch_wrapperHoverable__tpGPq {
  background: #3B3B3B;
  color: #fff;
}
#app .Stopwatch_wrapperTiny__NWplT {
  background: #1b1b1B;
  color: #ffffffb8;
}
#app .Stopwatch_wrapperHoverable__tpGPq:hover {
  background: #3B3B3B;
  color: #fff;
}
#app .Stopwatch_wrapperActive__NH52K.Stopwatch_wrapperHoverable__tpGPq {
  background: #16ab39;
  color: #fff;
}

#app .Card_actionsButton__YgN0y {
  color: #ffffffb8;
  fill: #ffffffb8;
}
#app .Card_actionsButton__YgN0y:hover {
  color: #fff;
  fill: #fff;
  background-color: #303030;
}

#app .DueDate_wrapper__-uPEo {
  background: #1b1b1b;
  color: #ffffffb8;
}

#app .DueDate_wrapper__-uPEo:hover {
  background: #3B3B3B;
  color: #fff;
}

#app .DueDate_wrapperOverdue__TVlzg {
  background: #db2828;
  color: #fff;
}

#app .List_outerWrapper__B4Idr {
  background-color: #1b1b1b;
}
#app .List_headerName__ztYJO {
  color: #ffffffb8;
  fill: #ffffffb8;
}
#app .List_addCardButton__8vjKW {
  background-color: #1b1b1b;
  color: #ffffffb8;
  fill: #ffffffb8;
  transition: background 85ms ease-in,opacity 40ms ease-in,border-color 85ms ease-in;
  border: none;
}
#app .List_addCardButton__8vjKW:hover {
  background: #00000052;
  color: #ffffffb8;
  fill: #fff;
  transition: fill .3s ease-in-out;
}
#app .List_headerButton__JFVwp {
  color: #ffffffb8;
  fill: #ffffffb8;
}
#app .List_headerButton__JFVwp:hover{
  color: #fff;
  fill: #fff;
}

#app .Card_card__zQfcO {
  background-color: #303030;
  box-shadow: 0 1px 0 #1a1a1a;
}

#app .Card_card__zQfcO:hover {
  background-color: #2B2B2B;
  transition: background-color .2s ease-in-out;
}
#app .Card_name__vpWb5 {
  color: #ffffffb8;
}
#app .Tasks_task__hyB6K {
  color: #aaa;
}

//DARK THEME SCHEDE END


#app .BoardActions_actions__jF5z+ {
  gap: 0px
}


#app .BoardActions_actions__jF5z+ {
  gap: 0px
}

[class~=Login_formTitle__xnYyM] {
    background-image:url("https://i.imgur.com/mzbBlcq.png");
    background-size: 210px;
    position: relative;
    left: -25px
}

#app button.Projects_card__s7ZIl:hover .Projects_addTitle__tXhB4 {
  transform: scale(1.05); /* Slight hover effect without shifting */
  transition: transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.UserItem_menuItemText__EuvLW {
    visibility: hidden;
    position: relative
}

.UserItem_menuItemText__EuvLW:before {
  visibility: visible
}

.UserItem_menuItemText__EuvLW::after {
    content: "TwistedFurby";
    visibility: visible;
    position: absolute;
    top: 0;
    left: 0;
}

.Item_author__Gb7ek {
    visibility: hidden;
    position: relative;
}

.ItemComment_author__J14e1 {
    visibility: hidden;
    position: relative;
}

.ItemComment_author__J14e1:after {
    content: "TwistedFurby";
    visibility: visible;
    position: absolute;
    top: 0;
    left: 0;
}

.ItemComment_date__azm7i:before {
    content: "· ";
    font-weight: 900;
    font-size: 15px
}

.ItemComment_date__azm7i {
    position: relative;
    left: -75px
}

.Item_author__Gb7ek::after {
    content: "TwistedFurby";
    visibility: visible;
    position: absolute;
    top: 0;
    left: 0;
}
.Item_text__ASgDb {
  position: relative;
  left: -74px
}

div[class~=Login_inputWrapper__SbI14]:nth-child(1):before {
    content: "Username";
}

[class~=large]>div:nth-child(1)>a:nth-child(1) {
    position: relative;
}

#app .Projects_add__D5XtL {
    background: #333;
    color: #fff;
    fill: #fff;
}

button.Projects_card__s7ZIl {
    border-color: #555
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



[class~=large]>div:nth-child(1)>a:nth-child(1) {
    left: 6pt;
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


a[class~=item]:nth-child(2) {
    user-select: none !important;
}

[class~=Header_logo__shVBB]:after {
    position: absolute;
}

html body#app div#root div.Login_wrapper__zYzT6.Login_fullHeight__Fded8 div.ui.middle.aligned.grid.Login_fullHeightPaddingFix__qqodI div.six.wide.computer.five.large.screen.sixteen.mobile.tablet.four.widescreen.column div.ui.middle.aligned.grid.Login_fullHeightPaddingFix__qqodI div.column div.Login_loginWrapper__XW1w2 div form.ui.large.form div.field button.ui.large.icon.primary.right.floated.labeled.button:hover {
    transition: background .3s ease;
}


[class~=Header_logo__shVBB]:after {
    top: 0;
}

div[class~=Login_inputWrapper__SbI14]:nth-child(1):before {
    font-weight: 700;
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

textarea::selection {
    background-color: #f42160;
}

[class~=Login_formTitle__xnYyM] {
    overflow: hidden;
}

html body#app div#root div.Login_wrapper__zYzT6.Login_fullHeight__Fded8 div.ui.middle.aligned.grid.Login_fullHeightPaddingFix__qqodI div.six.wide.computer.five.large.screen.sixteen.mobile.tablet.four.widescreen.column div.ui.middle.aligned.grid.Login_fullHeightPaddingFix__qqodI div.column div.Login_loginWrapper__XW1w2 div form.ui.large.form div.field button.ui.large.icon.primary.right.floated.labeled.button {
    background-color: #f2b84c !important;
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
    background: url("https://furarchiver.net/File/View?artist=twistedfurby&filename=1701454459.twistedfurby_aida_and_maria_stink.png") !important;
}

h1.ui.inverted.header.Login_descriptionTitle__db6ho,
h2.ui.inverted.header.Login_descriptionSubtitle__F9udW {
    visibility: hidden;
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


input {
    background: #191919 !important;
}



div[class~=Login_inputWrapper__SbI14]:nth-child(2)>div:nth-child(1),
div[class~=Login_inputWrapper__SbI14]:nth-child(1)>div:nth-child(1),
html body#app div#root div[class~=Login_wrapper__zYzT6][class~=Login_fullHeight__Fded8] div[class~=ui][class~=middle][class~=aligned][class~=grid][class~=Login_fullHeightPaddingFix__qqodI] div[class~=six][class~=wide][class~=computer][class~=five][class~=large][class~=screen][class~=sixteen][class~=mobile][class~=tablet][class~=four][class~=widescreen][class~=column] div[class~=ui][class~=middle][class~=aligned][class~=grid][class~=Login_fullHeightPaddingFix__qqodI] div[class~=column] div[class~=Login_loginWrapper__XW1w2] div div[class~=ui][class~=error][class~=visible][class~=message] div[class~=content]>p:nth-child(1) {
    display: none;
}

div[class~=Login_inputWrapper__SbI14]:nth-child(2):before {
    font-weight: 700;
}



[class~=Header_logo__shVBB]:after {
    font-size: clamp(16px, 3vw, 20px);
}



div.Board_lists__gV2Uz {
    flex-wrap: wrap;
}



[class~=Header_item__OOEY7][class~=Header_itemHoverable__nf6CM]:nth-child(1) {
    padding-left: 0pt;
}



textarea::selection {
    color: #fff;
}



[class~=Header_item__OOEY7][class~=Header_itemHoverable__nf6CM]:nth-child(1) {
    padding-bottom: 0pt;
}


div[class~=Login_inputWrapper__SbI14]:nth-child(2):before {
    line-height: 1.25pc;
}

#app .AccountPane_wrapper__pWfwV {
    padding-top: 0px;
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

html body#app.dimmable.dimmed div.ui.top.aligned.page.modals.dimmer.transition.visible.active div.ui.small.modal.transition.visible.active div.content div div.ui.segment.active.tab.AccountPane_wrapper__pWfwV form.ui.form {
    display: none;
}

html body#app.dimmable.dimmed div.ui.top.aligned.page.modals.dimmer.transition.visible.active div.ui.small.modal.transition.visible.active div.content div div.ui.segment.active.tab.AccountPane_wrapper__pWfwV button.User_button__CgzK9 {
    display: none;
}

html body#app.dimmable.dimmed div.ui.top.aligned.page.modals.dimmer.transition.visible.active div.ui.small.modal.transition.visible.active div.content div div.ui.segment.active.tab.AccountPane_wrapper__pWfwV br {
    display: none;
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
    document.title = "TwistedFurby's Trello Knockoff";

    // Change the link text if it exists
    const logoLink = document.querySelector('a.Header_logo__shVBB.Header_title__l+wMf');
    if (logoLink) {
        logoLink.innerText = 'TwistedFurby';
    }
});

document.querySelectorAll("a").forEach(a => {
  if (a.textContent.includes("About Planka")) {
    a.style.display = "none";
  }
});
