var options = new Options(
  /* access_key    */ 'AKIAYR3SX5P42UI65XTY',
  /* secret_access_key    */ 'A1d1AQedYbEHDHWV9D6IZFEKBZtgfVngs1cSKayA',
  /* sessionToken */ 'your token',
  /* currentWorkingDirectory */ null
);
 
var aws = new Aws(options);
 
aws.command('iam list-users').then(function (data) {
  console.log('data = ', data); 
});
 
//data = {
//  command: 'aws iam list-users ',
//  raw: '{\\n    \\"Users\\": [\\n        {\\n            \\"UserName\\": \\"developer\\", \\n            \\"PasswordLastUsed\\": \\"2015-10-03T17:58:49Z\\", \\n            \\"CreateDate\\": \\"2015-06-03T07:37:25Z\\", \\n            \\"UserId\\": \\"AIDAJBXXXXXXXXXXXXXXXXX\\", \\n            \\"Path\\": \\"/\\", \\n            \\"Arn\\": \\"arn:aws:iam::03XXXXXXXXX:user/developer\\"\\n        }\\n    ]\\n}\\n',
//  object:
//   {
//     Users:
//      [{
//        UserName: 'developer',
//        PasswordLastUsed: '2015-10-03T17:58:49Z',
//        CreateDate: '2015-06-03T07:37:25Z',
//        UserId: 'AIDAJBXXXXXXXXXXXXXXXXX',
//        Path: '/',
//        Arn: 'arn:aws:iam::03XXXXXXXXX:user/developer'
//      }]
//   }
//}

//License: MIT
//All credit goes to: https://www.npmjs.com/package/aws-cli-js
