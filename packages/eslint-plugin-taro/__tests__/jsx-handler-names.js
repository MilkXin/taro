const rule = require('../rules/jsx-handler-names')
const { RuleTester } = require('eslint')
const { parserOptions, testComponent } = require('../utils/utils')

const ruleTester = new RuleTester({ parserOptions })

const ERROR_MESSAGE = 'JSX 事件名需以 `on` 命名'

ruleTester.run('jsx-handler-names', rule, {
  valid: [
    {
      code: testComponent(`<View onClick={this.handleClick} />`)
    },
    {
      code: testComponent(`<View onTouchStart={this.handleClick} />`)
    },
    {
      code: testComponent(`<View onTouchMove={this.handleClick} />`)
    },
    {
      code: testComponent(`<View onTouchCancel={this.handleClick} />`)
    },
    {
      code: testComponent(`<View onTouchEnd={this.handleClick} />`)
    },
    {
      code: testComponent(`<View onLongPress={this.handleClick} />`)
    },
    {
      code: testComponent(`<View onLongClick={this.handleClick} />`)
    },
    {
      code: testComponent(`<View onTransitionEnd={this.handleClick} />`)
    },
    {
      code: testComponent(`<View onAnimationStart={this.handleClick} />`)
    },
    {
      code: testComponent(`<View onAnimationIteration={this.handleClick} />`)
    },
    {
      code: testComponent(`<View onAnimationEnd={this.handleClick} />`)
    },
    {
      code: testComponent(`<View onTouchForceChange={this.handleClick} />`)
    }
  ],
  invalid: [{
    code: testComponent(`<View onclick={this.handleClick} />`),
    errors: [{ message: ERROR_MESSAGE }]
  }, {
    code: testComponent(`<View handleClick={this.handleClick} />`),
    errors: [{ message: ERROR_MESSAGE }]
  }, {
    code: testComponent(`<View on-click={this.handleClick} />`),
    errors: [{ message: ERROR_MESSAGE }]
  }, {
    code: testComponent(`<CustomComponent onclick={this.handleClick} />`),
    errors: [{ message: ERROR_MESSAGE }]
  }, {
    code: testComponent(`<CustomComponent handleClick={this.handleClick} />`),
    errors: [{ message: ERROR_MESSAGE }]
  }, {
    code: testComponent(`<CustomComponent oNClick={this.handleClick} />`),
    errors: [{ message: ERROR_MESSAGE }]
  }, {
    code: testComponent(`<CustomComponent ONClick={this.handleClick} />`),
    errors: [{ message: ERROR_MESSAGE }]
  }]
})
