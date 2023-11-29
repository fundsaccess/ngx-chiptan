<p align="center">
  <img height="256px" width="256px" style="text-align: center;" src="https://fundsaccess.github.io/ngx-chiptan/assets/angular.svg">
</p>

# ngx-chiptan

Angular component to renders chiptan flicker code.

Demo: https://fundsaccess.github.io/ngx-chiptan/ 

For the Angularjs version see https://github.com/fundsaccess/ng-chiptan

## Installation

npm:
```
$ npm i ngx-chiptan --save
```

yarn:
```shell
yarn add ngx-chiptan
```

## Version compatibility

This library supports Angular 8+. Please check the version compatibility below to choose the correct version to install.

| angular-iban | Angular |
|:------------:|:-------:|
|    0.1.4     |   8.x   |
|     10.x     |  10.x   |
|     11.x     |  11.x   |
|     12.x     |  12.x   |
|     13.x     |  13.x   |
|     14.x     |  14.x   |
|     15.x     |  15.x   |
|     16.x     |  16.x   |
|     17.x     |  17.x   |

## Import

Once installed you need to import the main module:
```typescript
import { NgxChiptanModule } from 'ngx-chiptan';

@NgModule({
  declarations: [],
  imports: [NgxChiptanModule], 
})
export class Module {
}
```
## Usage
```html
<ngx-chiptan 
    code="17850120452019980412345678041234567804123456789E"
    width="300" 
    height="150"  
    bgColor="#000" 
    barColor="#fff">
</ngx-chiptan>
```

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| code | string | '' | ChipTAN [code](https://6xq.net/flickercodes/) to render. |
| width | number | 205 | Canvas width. |
| height | number | 100 | Canvas height. |
| bgColor | string | '#000' | Canvas background color. |
| barColor | string | '#fff' | Vertical bar(s) in canvas color. |

## Demo
https://fundsaccess.github.io/ngx-chiptan/ 

or
```
cd projects/ngx-chiptan-showcase 
ng serve
```

## Acknowledgments

Inspired by  
[chipTAN Flickercodes article](https://6xq.net/flickercodes/)

[react-chiptan](https://github.com/basimhennawi/react-chiptan)

## License
Copyright (c) 2019-2023 fundsaccess AG. Licensed under the MIT License (MIT)
