# roleHierarchy

**The fields in enum have higher hierarchy in descending order.**

## on your enum that defines security roles

[Role.java](https://github.com/yhtps/unorganized-snippets/blob/main/java-spring/security/roleHierarchy/Role.java#L22-L26)

```java
import java.util.stream.Collectors;
import java.util.stream.IntStream;
```

```java
 public static String getRoleHierarchy() {
  return IntStream.range(0, Role.values().length - 1)
          .mapToObj(i -> "ROLE_" + Role.values()[i].name() + " > ROLE_" + Role.values()[i + 1].name())
          .collect(Collectors.joining("\n"));
 }
```

## on your WebSecurity Configuration

[WebSecConfig.java](https://github.com/yhtps/unorganized-snippets/blob/main/java-spring/security/roleHierarchy/WebSecConfig.java#L15-L20)

```java
import org.springframework.context.annotation.Bean;
import org.springframework.security.access.hierarchicalroles.RoleHierarchy;
import org.springframework.security.access.hierarchicalroles.RoleHierarchyImpl;
```

```java
 @Bean
 static RoleHierarchy roleHierarchy() {
  final RoleHierarchyImpl hierarchy = new RoleHierarchyImpl();
  hierarchy.setHierarchy(Role.getRoleHierarchy());
  return hierarchy;
 }
```
