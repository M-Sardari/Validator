![Product Name Screen Shot][nestjs-logo]
# Validator

Rq-Rs Validation with support from array of Objects

## install

npm install gadin-validator

## usage

### @Validator({ propName, required, type },isArray?)

Checks for a valid value of the given type.

    @Validator({ title: 'عنوان', required: true|false, type: 'boolean' })
    @Validator({ title: 'عنوان', required: true|false, type: 'date' })
    @Validator({ title: 'عنوان', required: true|false, type: 'object' })
    @Validator({ title: 'عنوان', required: true|false, type: 'number' })
    @Validator({ title: 'عنوان', required: true|false, type: 'any' })
    @Validator({ title: 'عنوان', required: true|false, type: 'string[]' })

    //If the type value is not entered, the 'string' is considered by default

    @Validator({ title: 'عنوان', required: true|false })

    //For array of Objects

    @Validator({ title: 'عنوان', required: true|false, type: 'number' }, true)


    ## license

    Copyright (C) 2021 Mohammad Sardari


<!-- MARKDOWN LINKS & IMAGES -->
[nestjs-logo]: nestjs-logo.png
