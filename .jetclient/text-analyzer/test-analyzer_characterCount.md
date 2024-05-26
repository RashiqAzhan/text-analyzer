```toml
name = 'test-analyzer_characterCount'
method = 'POST'
url = 'http://localhost:3000/text-analyzer/character-count'
sortWeight = 3000000
id = '49fe2ebd-d746-4d31-9d20-e3ccab9f07f2'

[[headers]]
key = 'Content-Type'
value = 'application/json'

[body]
type = 'JSON'
raw = '''
{
  "text": "The quick brown fox jumps over the lazy dog. The lazy dog slept in the sun."
}'''
```
