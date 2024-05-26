```toml
name = 'test-analyzer_longestWords'
method = 'POST'
url = 'http://localhost:3000/text-analyzer/longest-words'
sortWeight = 6000000
id = '237d9d7d-b255-49dd-aeae-4e0b89052834'

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
