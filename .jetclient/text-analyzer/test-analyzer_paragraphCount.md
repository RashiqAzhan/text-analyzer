```toml
name = 'test-analyzer_paragraphCount'
method = 'POST'
url = 'http://localhost:3000/text-analyzer/paragraph-count'
sortWeight = 5000000
id = 'fa75537d-ad19-4db2-94c5-0a404cee1ce3'

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
