import re
with open('app/terms/TermsClient.tsx', 'r') as f:
    content = f.read()

# We only want to replace quotes that are inside paragraph or li text.
# The safe way is to replace specific known phrases based on the linters output.
reps = {
    '"we"': '&quot;we&quot;',
    '"us"': '&quot;us&quot;',
    '"Company"': '&quot;Company&quot;',
    '"Aria"': '&quot;Aria&quot;',
    '"App"': '&quot;App&quot;',
    '"Website"': '&quot;Website&quot;',
    '"Services"': '&quot;Services&quot;',
    '"Service"': '&quot;Service&quot;',
    '"Agreement"': '&quot;Agreement&quot;',
    '"User"': '&quot;User&quot;',
    '"you"': '&quot;you&quot;',
    '"Settings"': '&quot;Settings&quot;',
    '"mutual agreement"': '&quot;mutual agreement&quot;',
    "'": "&apos;"
}

# The linter gave specific errors. Let's just fix the whole file by replacing all ' and " that are NOT inside tags.
# Actually, the simplest way to fix react/no-unescaped-entities for this file is just to suppress it, or fix it textually.
