# what is Nest.js  
Nest.jsはNode.jsのフルスタックフレームワークで、scalableである。  
また、TypeScriptをサポートしているのでテストが容易である。
Angularからの影響を強く受けている。  

# How to install   
`npm install -g @nestjs/cli`

# Create a new project 
`nest new project-name`

Angularぽい

|  |  |   
|--|--|
| app.controller.ts | 基本となるコントローラー  |
| app.module.ts | アプリケーションのrootモジュール |  
| main.ts |  アプリケーションインスタンスを作成する為のコア関数`NestFactory`を使用するアプリケーションのエントリーファイル   |


# Running the application
`npm run start`

`localhost:3000`にアクセスすると起動を確認することができます。
