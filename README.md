# ngx-chiptan

Angular component to renders chiptan flicker code.

## Installation

```
$ npm i ngx-chiptan --save
```

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

## Demo
```
cd ngx-chiptan-showcase 
ng serve
```

## Acknowledgments

Inspired by  
[chipTAN Flickercodes article](https://6xq.net/flickercodes/)

[react-chiptan](https://github.com/basimhennawi/react-chiptan)

## License
Copyright (c) 2019 fundsaccess AG. Licensed under the MIT License (MIT)
