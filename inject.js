// create a style element
var style = document.createElement('style');

// add the CSS as a string
style.innerHTML = `
/* DARK THEME POPUPS START */

.ui.popup {
    background-color: #121212;
    color: #ffffffb8;
}
.ui.menu .item {
    color: #ffffffb8
}

.ui.secondary.menu .active.item {
    color: #fff;
    background-color: #101010
    
}
.ActionsStep_menuItem__3UZGJ:hover {
    background: #303030 !important;
    color: #ffffffb8 !important;
}

div.ui.bottom.left.wide.basic.popup.transition.visible.Popup_wrapper__gjV0g {
    background-color: #121212 !important;
}

.ui.selection.dropdown,
.ui.selection.visible.dropdown > .text:not(.default) {
    background-color: #121212;
    color: #ffffffb8;
}

.ui.dropdown .menu,
.ui.dropdown .menu > .item {
    background-color: #121212;
    color: #ffffffb8;
}

.ui.dropdown .menu .selected.item {
    color: #fff;
}

button.ui.button.EditStep_deleteButton__NTHkI,
button.ui.button.EditStep_deleteButton__a03v5,
#app .EditStep_deleteButton__EiWg\+ {
    color: #fff;
    background-color: #cf513d;
    text-shadow: none;
    box-shadow: 0 1px 0 #ae2e2e !important;
}
button.ui.button.EditStep_deleteButton__NTHkI:hover,
button.ui.button.EditStep_deleteButton__a03v5:hover,
#app .EditStep_deleteButton__EiWg\+:hover {
    background-color: #b04632;
}

.ui.dropdown .menu > .item:hover {
    background: #303030;
    color: #ffffffb8
}

.ui.selection.dropdown .menu > .item {
    border-color: #303030
}
.PopupHeader_wrapper__GP2XO {
    height: 44px;
}

.PopupHeader_content__lu4hU {
    padding: 12px 28px 6px;  
}
#app .StopwatchEditStep_iconButton__y1Ft8:hover,
#app .LabelsStep_addButton__vxcSF:hover {
    background-color: #1b1b1b
}

#app .LabelsStep_addButton__vxcSF {
    color: #aaa
}

#app .StopwatchEditStep_iconButton__y1Ft8 {
    color: #aaa
}

#app .DeleteStep_content__o0ybn {
    color: #ffffffb8;
    padding-bottom: 10px;
}

#app .StopwatchEditStep_iconButton__y1Ft8 {
    color: #ffffffb8
}


#app .StopwatchEditStep_text__7swbJ,
#app .UserAddStep_text__12EnT,
#app .CardMoveStep_text__AwHbK {
    color: #aaa
}

.ui.toggle.checkbox label,
#app .ui.toggle.checkbox input:checked ~ label {
    color: #aaa !important;
}

#app .StopwatchEditStep_deleteButton__6KjeG {
    box-shadow: 0 1px 0 #ae2e2e;
}

.ui.selection.dropdown:hover {
  border-color: rgba(170, 170, 170, 0.6);
}

.ui.selection.dropdown{
  border-color: rgba(170, 170, 170, 0.3);
}

#app .Item_menuItem__wTAgE:hover,
.ui.secondary.menu a.item:hover {
    background: #303030 !important;
    color: #ffffffb8 !important;
}

/* DARK THEME POPUPS END */

/* DARK THEME MODAL START */

#app [class*="CardModal_grid"] {
    background-color: #1b1b1b !important;
}
#app .NameField_field__VNSXF, 
#app .CardModal_moduleIcon__KX6oY,
#app .CardModal_moduleHeader__b0c7q,
#app .CardModal_descriptionText__r57zS,
#app .Item_task__JuSWC,
#app .Item_name__zv0Mf,
#app .Activities_moduleIcon__DMJhR, 
#app .Activities_moduleHeader__0qBt0,
.ui.comments .comment .actions button:hover,
#app .Activities_toggleButton__VpLFR:hover,
#app .ItemComment_author__J14e1,
#app .Item_author__Gb7ek,
#app .Item_option__5o2ZW:hover,
.ui.basic.table th,
.ui.modal > .header,
#app .AddStep_importButton__Qvl87:hover,
#app .ImportStep_button__oBffs:hover,
#app .GeneralPane_actionButton__QZx1A:hover,
#app .BackgroundPane_actionButton__H5sjC:hover,
#app .AvatarEditStep_actionButton__TsBby:hover,
#app .UserItem_menuItemText__EuvLW:hover {
    color: #ffffffb8
}

#app .Item_taskCompleted__hjVLl,
#app .Tasks_taskButtonText__ZuWQF,
#app .Item_date__LKNlH,
#app .Item_extension__KY2iU,
#app .Item_option__5o2ZW,
.ui.comments .comment .actions button,
#app .Activities_toggleButton__VpLFR,
#app .ItemComment_date__azm7i,
#app .Item_text__ASgDb,
#app .CardModal_descriptionButton__-zAfk,
#app .CardModal_text__SCB7P,
#app .Editor_text__zolDF,
#app .EditStep_text__VO1tP,
#app .Card_attachmentContent__9uvnk,
#app .AboutPane_version__iVJbU,
.ui.basic.table td,
#app .UserInformationEdit_text__KQgCF,
#app .UserEmailEditStep_text__KxLk5,
#app .UserPasswordEditStep_text__bCLOO,
#app .InformationEdit_text__9Q6-S,
#app .AddStep_importButton__Qvl87,
#app .ImportStep_button__oBffs,
#app .Filters_searchInactive__UE63- input::placeholder,
#app .GeneralPane_actionButton__QZx1A,
#app .UserItem_menuItemTextActive__I2\+Yg,
#app .BackgroundPane_actionButton__H5sjC,
#app .AvatarEditStep_actionButton__TsBby,
#app .UserItem_menuItemText__EuvLW {
    color: #aaa
}

#app .Tasks_taskButtonText__ZuWQF:hover, 
#app .CardModal_descriptionButton__-zAfk:hover,
#app .Card_attachmentContent__9uvnk:hover {
    color: #ffffffb8
}
#app .Tasks_taskButton__92Nn1:hover,
#app .Item_textEditable__U+Pwe:hover,
#app .CardModal_descriptionButton__-zAfk:hover,
#app .AvatarEditStep_actionButton__TsBby:hover {
    background-color: #303030
}

#app .Item_date__qxgsp {
    color: #888
}

#app .DueDate_wrapperMedium__gt9xE {
    background-color: #0F0F0F !important;
}

#app .CardModal_descriptionButtonText__EXASW {
    visibility: hidden;
    position: relative;
    white-space: nowrap; 
}

#app .CardModal_descriptionButtonText__EXASW:after {
    content: "Add a description...";
    visibility: visible;
    position: absolute;
    top: -10px;
    left: 0;
    white-space: nowrap; 
}

#app .Activities_toggleButton__VpLFR {
    text-decoration: none
}

#app .Activities_toggleButton__VpLFR:hover {
    text-decoration: underline
}

#app .Header_userName__r-MQo{
    display: block !important;
}

#app .Stopwatch_wrapperMedium__5ouE8 {
    background-color: #0F0F0F;
    color: #ffffffb8;
}

#app .Item_thumbnail__q2vqp {
    background-color: #202020
}


#app .Tasks_taskButton__92Nn1 {
    width: 23%;
    min-height: 40px
}

#app .CardModal_descriptionButton__-zAfk {
    width: 25%;
    min-height: 40px
}

#app .GeneralPane_actionButton__QZx1A:hover {
    color: #fff;
    background-color: #cf513d;
    text-shadow: none;
    box-shadow: 0 1px 0 #ae2e2e !important;
}    
    
#app .Add_field__bkJN2 {
    background-color: #121212;
    color: #ffffffb8;
}

html body#app .CardModal_attachment__ogpcE button.Stopwatch_button__3iHGS span.Stopwatch_wrapper__1OXmA.Stopwatch_wrapperMedium__5ouE8.Stopwatch_wrapperHoverable__tpGPq:hover {
    background-color: #0F0F0F;
    color: #fff;
}

.CodeMirror {
    background-color: #121212;
    color: #ffffffd8;
}
.CodeMirror-cursor {
    border-left: 1px solid #ffffffd8;
}

.CodeMirror-selectedtext {
    color: #000
}

.editor-toolbar {
    border-color: #aaa;
    border-left: 0;
    border-right: 0;
    border-top: 0
}

.EasyMDEContainer .CodeMirror {
    border-color: #aaa;
    border-left: 0;
    border-right: 0;
    border-bottom: 0
}

#app .DescriptionEdit_field__UOI7T,
#app .CommentAdd_field__krf6C,
#app .NameEdit_fieldWrapper__5BEQD,
#app .NameEdit_fieldWrapper__5BEQD textarea,
#app .CardAdd_fieldWrapper__zxVml,
#app .CardAdd_fieldWrapper__zxVml textarea {
    background-color: #121212;
    color: #fff;
    fill: #fff;
}

#app .NameEdit_field__rC9xs,
#app .NameEdit_field__rC9xs textarea,
.ui.form textarea {
    background-color: #121212 !important;
    color: #fff !important;
    fill: #fff;
}

#app .ListAdd_wrapper__01Vmd {
    background-color: #1b1b1b
}

#app .NameEdit_fieldWrapper__5BEQD,
#app .CardAdd_fieldWrapper__zxVml,
#app .ListAdd_field__NxzUm {
    box-shadow: 0 1px 0 #1a1a1a;
}
    



body > div.ui.page.modals.dimmer.transition.visible.active[style*="display: flex"] 
> div.ui.tiny.basic.modal.transition.visible.active 
> div.content {
    padding-bottom: 3.5rem !important;
}


#app .CardModal_actionButton__1eB1l,
#app .Item_button__\+54eA {
    background-color: #121212;
    color: #aaa;
    fill: #fff;
}

#app .BackgroundPane_actionButton__H5sjC:hover,
#app .BackgroundPane_action__f23lf {
    background-color: #1b1b1b !important;
    border: none !important;
    box-shadow: none !important;
}

#app .AvatarEditStep_action__uLlR3,
#app .AvatarEditStep_action__uLlR3:hover,
#app .AvatarEditStep_actionButton__TsBby {
    background-color: #121212 !important;
}

.ui.modal {
    background-color: unset
}

#app .Item_button__\+54eA {
    box-shadow: unset
}

#app .CardModal_actionIcon__dnocs {
    color: #fff
}

#app .CardModal_actionButton__1eB1l:hover,
#app .Item_button__\+54eA:hover {
    background-color: #121212;
    color: #fff;
}

#app .ItemComment_text__PM3Ce {
    background-color: #303030;
    color: #fff;
    fill: #fff;
}

#app .ItemComment_title__8-\+o2 {
    background-color: #1b1b1b
}


.editor-toolbar button {
    color: #ffffffb8
}

.editor-toolbar button:hover {
    color: #fff;
    background-color: #121212;
    border: 0px
}

#app .CardModal_dueDate__Y3NdU,
.ui.button {
  color: #ffffffb8;
  fill: #ffffffb8;
}
#app .CardModal_dueDate__Y3NdU:hover,
.ui.button:hover {
  color: #fff;
  fill: #fff;
}

.ui.modal {
    border-radius: 1rem !important;
}

.ui.modal > .close {
  color: #ffffffe8;
  fill: #ffffffe8;
}

.ui.modal > .content,
.ui.large.modal > .header,
.ui.modal > .actions {
  background: #1b1b1b !important;
}

.ui.segment {
    background-color: unset !important;
}

#app .User_button__CgzK9 {
    margin-top: 40px !important;
}

.ui.header {
    color: #aaa !important;
}

.ui.input.error > input {
    background-color: unset !important;
}


.ui.secondary.pointing.menu .active.item {
    color: #fff !important;
}


.ui.modal > .close:hover,
#app .Item_editButton__fmRvU:hover {
  color: #fff;
  fill: #fff;
  background-color: #1b1b1b
}

.ui.checkbox .box::after, .ui.checkbox .box::before, .ui.checkbox label::after, .ui.checkbox label::before {
    background-color: #1b1b1b;
}

div.ui.segment.active.tab.PreferencesPane_wrapper__OLqz6
  > div.ui.toggle.checkbox
  > input:checked ~ label::after {
  color: #fff;
  background-color: #1b1b1b;
  border: 11px solid #fff;
}


.ui.checkbox input:checked ~ .box::after, .ui.checkbox input:checked ~ label::after {
    color: #ffffffb8
}

.ui.checkbox input:checked ~ .box:hover::after, .ui.checkbox input:checked ~ label:hover::after {
  border-color: #ffffffb8
}


.ui.checkbox .box::before, .ui.checkbox label::before {
  background-color: #303030 !important;
  border: 0.15rem solid #aaa;
  border-radius: .15rem;
}

.ui.checkbox .box:hover::before, .ui.checkbox label:hover::before {
  background-color: #252525 !important;
  border: 0.15rem solid #ffffffb8;
}


/* DARK THEME MODAL END */


/* DARK THEME SCHEDE START */

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

#app .DueDateEditStep_deleteButton__WfBC7 {
  box-shadow: 0 1px 0 #ae2e2e;
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
#app .List_headerButton__JFVwp:hover {
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

/* DARK THEME SCHEDE END */

/* DATEPICKER DARK START */

#app .react-datepicker__header {
    background-color: #1b1b1b;
}

#app .react-datepicker__current-month {
    color: #aaa
}

#app .react-datepicker__day--outside-month {
    background-color: #2b2b2b !important;
    color: #2b2b2b !important;
}

#app .react-datepicker__day {
    background-color: #1a1a1a;
    color: #aaa;
    border-color: rgba(255, 255, 255, 0.15);
}

#app .react-datepicker__week {
    border-color: rgba(255, 255, 255, 0.15);
}

div.DueDateEditStep_fieldBox__vdgwg > div > input {
    background-color: #1a1a1a !important;
}

#app .DueDateEditStep_text__1AGGK {
    color: #aaa
}

#app .react-datepicker__day--selected {
    background: #216ba5;
    color: #ffffffb8
}

.react-datepicker {
    background-color: #222222
}
#app .react-datepicker__day-names {
    background-color: #222222;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    border-right: 0px;
    border-left: 0px;
    color: #ffffffb8 !important;
}

#app .react-datepicker__day-name {
    color: #ffffffb8 !important;
}
    
/* DATEPICKER DARK END */

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


#app .Item_menuItemTextActive__rkkjJ::before {
    visibility: visible !important;
    color: #aaa;
}

#app .Item_menuItemTextActive__rkkjJ:hover::before {
    color: #fff !important;
}

.Item_menuItemTextActive__rkkjJ {
    color: #ffffffb8
}


.segment > button:nth-child(1) {
    display: block !important;
}

/* PFP ON ACCOUNT PAGE ^^^ */

.ItemComment_date__azm7i:before {
    content: "· ";
    font-weight: 900;
    font-size: 15px
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

[class~=Header_logo__shVBB] {
    visibility: hidden;
    position: relative;
}

html body#app div#root div.Login_wrapper__zYzT6.Login_fullHeight__Fded8 div.ui.middle.aligned.grid.Login_fullHeightPaddingFix__qqodI div.six.wide.computer.five.large.screen.sixteen.mobile.tablet.four.widescreen.column div.ui.middle.aligned.grid.Login_fullHeightPaddingFix__qqodI div.column div.Login_loginWrapper__XW1w2 div form.ui.large.form div.field button.ui.large.icon.primary.right.floated.labeled.button:hover {
    background-color: #f42160 !important;
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

.ui.input > input {
    background-color: #0e0e0e !important;
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

.Header_userName__r-MQo {
  color: transparent !important;
  position: relative !important;
}

.Header_userName__r-MQo::after {
  content: "Powered by kekko" !important;
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  color: #ffffffb8;
  white-space: nowrap;
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
    color: #cc3131;
}

.ui.dimmer {
    background-color: #000000d9 !important
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


.ui.bottom.right.popup,
.ui.bottom.left.popup {
    box-shadow: none !important;
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

.Board_lists__gV2Uz {
  margin-top: 20px
}


h2[class~=ui][class~=inverted][class~=header][class~=Login_descriptionSubtitle__F9udW]:before {
    content: "Powered by kekko";
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
    background: url("https://i.postimg.cc/9fmyY8vN/Susies-fun-1.png") !important;
    background-position: -250px !important;
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




input {
    background:   !important;
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

textarea::selection {
    color: #fff;
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

.User_button__CgzK9,
span.User_wrapper__hRMaA:nth-child(2) {
    display: none !important;
}
div.CardModal_attachments__Hio2f:nth-child(1) {
    display: none !important;
}

div[class~=Login_inputWrapper__SbI14]:nth-child(2):before {
    position: relative;
}

#app .Header_userName__r-MQo {
    padding: 0;
    margin-left: -17px;
    margin-right: 32px;
}

#app .Header_userName__r-MQo:hover:after {
    color: #fff !important;
}

[class~=Header_item__OOEY7][class~=Header_itemHoverable__nf6CM]:nth-child(1) {
    padding-right: 0pt;
}

#app .Tasks_countOpened__pj2KM::after,
#app .Tasks_countClosed__7mQLh::after {
  filter: brightness(500%) contrast(100%);
}


div[class~=Login_inputWrapper__SbI14]:nth-child(2):before {
    bottom: 3pt;
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
