# mapstruct

in the ext block

```groovy
 set('mapstructVersion', "1.5.5.Final")
 set('mapstructSpringExtensionsVersion', "1.0.1")
```

in the dependencies block

```groovy
 implementation "org.mapstruct:mapstruct:${mapstructVersion}"
 implementation "org.mapstruct.extensions.spring:mapstruct-spring-annotations:${mapstructSpringExtensionsVersion}"
 compileOnly 'org.projectlombok:lombok'
 implementation 'org.projectlombok:lombok-mapstruct-binding:0.2.0'
```

```groovy
 annotationProcessor "org.mapstruct:mapstruct-processor:${mapstructVersion}"
 annotationProcessor "org.mapstruct.extensions.spring:mapstruct-spring-extensions:${mapstructSpringExtensionsVersion}"
 annotationProcessor 'org.projectlombok:lombok'
```

**The order is Important!**

or, you could just write the version directly

```groovy
 implementation "org.mapstruct:mapstruct:1.5.5.Final"
 implementation "org.mapstruct.extensions.spring:mapstruct-spring-annotations:1.0.1"
 compileOnly 'org.projectlombok:lombok'
 implementation 'org.projectlombok:lombok-mapstruct-binding:0.2.0'
```

```groovy
 annotationProcessor "org.mapstruct:mapstruct-processor:1.5.5.Final"
 annotationProcessor "org.mapstruct.extensions.spring:mapstruct-spring-extensions:1.0.1"
 annotationProcessor 'org.projectlombok:lombok'
```
