# Demo app for meilisearch 


## Run meilisearch with docker:

```js 
cp .env.example .env
```

```bash
docker-compose up
```

## Run application locally:

```bash
npm run start
```

## Full list example of meilisearch configuration options:

```json

      - MEILI_CONFIG_FILE_PATH=/path/to/your/config.toml
      - MEILI_DB_PATH=/data.ms
      - MEILI_ENV=production
      - MEILI_HTTP_ADDR=localhost:7700
      - MEILI_MASTER_KEY=your_master_key
      - MEILI_NO_ANALYTICS=true
      - MEILI_DUMP_DIR=/path/to/your/dump/dir
      - MEILI_IMPORT_DUMP=/path/to/your/dump/file.dump
      - MEILI_IGNORE_MISSING_DUMP=true
      - MEILI_IGNORE_DUMP_IF_DB_EXISTS=true
      - MEILI_LOG_LEVEL=INFO
      - MEILI_MAX_INDEXING_MEMORY=1073741824  # 1GB
      - MEILI_MAX_INDEXING_THREADS=4
      - MEILI_HTTP_PAYLOAD_SIZE_LIMIT=104857600  # 100MB
      - MEILI_SCHEDULE_SNAPSHOT=86400
      - MEILI_SNAPSHOT_DIR=/path/to/your/snapshot/dir
      - MEILI_IMPORT_SNAPSHOT=/path/to/your/snapshot/file.snapshot
      - MEILI_IGNORE_MISSING_SNAPSHOT=true
      - MEILI_IGNORE_SNAPSHOT_IF_DB_EXISTS=true
      - MEILI_SSL_AUTH_PATH=/path/to/your/ssl/auth
      - MEILI_SSL_CERT_PATH=/path/to/your/ssl/cert.pem
      - MEILI_SSL_KEY_PATH=/path/to/your/ssl/key.pem
      - MEILI_SSL_OCSP_PATH=/path/to/your/ssl/ocsp.der
      - MEILI_SSL_REQUIRE_AUTH=true
      - MEILI_SSL_RESUMPTION=true
      - MEILI_SSL_TICKETS=true
```
