const test = require(`ava`)
const { resolve } = require(`path`)
const sao = require(`sao`)
const template = {
  fromPath: resolve(`.`)
}

test(`Copyright has correct info`, t =>
  sao
    .mockPrompt(template, {
      username: `someuser`,
      name: `Some User`
    })
    .then(res => {
      const thisYear = new Date().getFullYear()
      const content = res.files.LICENSE.contents.toString()
      const headerText = content.match(/Copyright \(c\) (.*)$/im)[1]

      t.not(headerText.indexOf(thisYear), -1)
      t.not(headerText.indexOf(`github.com/someuser`), -1)
      t.not(headerText.indexOf(`Some User`), -1)
    }))
