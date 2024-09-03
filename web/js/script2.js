
      document.addEventListener('DOMContentLoaded', function (e) {
          FormValidation.formValidation(document.getElementById('demoForm'), {
              fields: {
                  email: {
                      validators: {
                          emailAddress: {
                              message: 'The value is not a valid email address',
                          },
                      },
                  },
              },
              plugins: {
                  trigger: new FormValidation.plugins.Trigger(),
                  bootstrap: new FormValidation.plugins.Bootstrap(),
                  submitButton: new FormValidation.plugins.SubmitButton(),
                  icon: new FormValidation.plugins.Icon({
                      valid: 'fa fa-check',
                      invalid: 'fa fa-times',
                      validating: 'fa fa-refresh',
                  }),
              },
          });
      });
