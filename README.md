# chm-cbd.net inbound emails handler

Update the `config.json` file

```
npm install
zip -r --exclude=*.git*  out.zip . 
```

upload the zip file to AWS lambda `chm-cbd-net-ses-inbound`


Set Lambda environment vars for 

```
FROM_EMAIL
SUBJECT_PREFIX
BUCKET
BUCKET_KEY_PREFIX
FORWARD_MAPPING_1...
FORWARD_MAPPING_2...
FORWARD_MAPPING_3...
```

FORWARD_MAPPING_X can forward to multiple target email simply separate them using semicolon `;`. EG:

```
FORWARD_MAPPING_X="name@my-ses-domain.com=real-name@my-real-domain.com;another-real-name@my-other-real-domain.com;"
```
