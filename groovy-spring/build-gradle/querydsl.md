# querydsl

in the ext block

```groovy
 set('querydslVersion', "5.0.0:jakarta")
```

in the dependencies block

```groovy
 implementation "com.querydsl:querydsl-jpa:${querydslVersion}"
 annotationProcessor "com.querydsl:querydsl-apt:${querydslVersion}"
 annotationProcessor 'jakarta.annotation:jakarta.annotation-api'
 annotationProcessor 'jakarta.persistence:jakarta.persistence-api'
```

> the jakarta-atp will generate metadata for ide

---

or, you could just write the version directly

```groovy
 implementation "com.querydsl:querydsl-jpa:5.0.0:jakarta"
 annotationProcessor "com.querydsl:querydsl-apt:5.0.0:jakarta"
 annotationProcessor 'jakarta.annotation:jakarta.annotation-api'
 annotationProcessor 'jakarta.persistence:jakarta.persistence-api'
```

**You could, however, use ~~~`${dependencyManagement.importedProperties['querydsl.version']}`~~~ instead of `5.0.0`**

**but it will break the ext block somehow so I don't recommend it.**
