JotForm.init(function() {
  if (window.JotForm && JotForm.accessible) $('input_8').setAttribute('tabindex', 0);
  JotForm.setPhoneMaskingValidator('input_5_full', '(###) ###-####');
  if (window.JotForm && JotForm.accessible) $('input_7').setAttribute('tabindex', 0);
  JotForm.newDefaultTheme = false;
  JotForm.newPaymentUIForNewCreatedForms = true;
  JotForm.newPaymentUI = true;
  JotForm.alterTexts(undefined);
  JotForm.clearFieldOnHide = 'disable';
  JotForm.submitError = 'jumpToFirstError';
  /*INIT-END*/
});

JotForm.prepareCalculationsOnTheFly([
  null,
  { name: 'heading', qid: '1', text: 'Form', type: 'control_head' },
  { name: 'submit2', qid: '2', text: 'Submit', type: 'control_button' },
  null,
  { description: '', name: 'email', qid: '4', subLabel: '', text: 'Email', type: 'control_email' },
  { description: '', name: 'phoneNumber', qid: '5', text: 'Phone Number', type: 'control_phone' },
  null,
  { description: '', name: 'typeA', qid: '7', subLabel: '', text: 'Message', type: 'control_textarea' },
  { description: '', name: 'name', qid: '8', subLabel: '', text: 'Name', type: 'control_textbox' }
]);
setTimeout(function() {
  JotForm.paymentExtrasOnTheFly([
    null,
    { name: 'heading', qid: '1', text: 'Form', type: 'control_head' },
    { name: 'submit2', qid: '2', text: 'Submit', type: 'control_button' },
    null,
    { description: '', name: 'email', qid: '4', subLabel: '', text: 'Email', type: 'control_email' },
    { description: '', name: 'phoneNumber', qid: '5', text: 'Phone Number', type: 'control_phone' },
    null,
    { description: '', name: 'typeA', qid: '7', subLabel: '', text: 'Message', type: 'control_textarea' },
    { description: '', name: 'name', qid: '8', subLabel: '', text: 'Name', type: 'control_textbox' }
  ]);
}, 20);
