import * as core from '@actions/core'

function run() {
  try {
    core.setOutput('foo-output', 'foo')
  } catch (e) {
    core.setOutput('task-error', 'baz')
    core.setFailed('oops')
  }
}

run()
