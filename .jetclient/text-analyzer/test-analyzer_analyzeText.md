```toml
name = 'test-analyzer_analyzeText'
method = 'GET'
url = 'http://localhost:3000/text-analyzer'
sortWeight = 1000000
id = '24b80b68-7a12-455b-9bbb-fd7560d85f54'

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
