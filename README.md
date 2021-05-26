# Validation

Rq-Rs Validation with support from array of Objects

## install

npm install gadin-validation

## usage

### @Validator({ title, required, type },isArray?)

Checks for a valid value of the given type.

    @Validator({ title: 'وضعیت', required: true|false, type: 'boolean' })
    @Validator({ title: 'وضعیت', required: true|false, type: 'date' })
    @Validator({ title: 'وضعیت', required: true|false, type: 'object' })
    @Validator({ title: 'وضعیت', required: true|false, type: 'number' })
    @Validator({ title: 'وضعیت', required: true|false, type: 'any' })
    @Validator({ title: 'وضعیت', required: true|false, type: 'string[]' })

    //If the type value is not entered, the 'string' is considered by default

    @Validator({ title: 'وضعیت', required: true|false })

    //For array of Objects

    @Validator({ title: 'وضعیت', required: true|false, type: 'number' },true)


    ## license

    Copyright (C) 2021 Mohammad Sardari



