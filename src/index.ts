import * as core from '@actions/core'

function run() {
  try {
    core.setOutput('foo-output', 'foo')
  } catch (e) {
    const message = e instanceof Error ? e.message : 'oops'

    core.setOutput('task-error', 'baz')
    core.setFailed(message)
  }
}

run()
