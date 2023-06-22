# roleHierarchy

**The fields in enum have higher hierarchy in descending order.**

## on your enum that defines security roles

```java
import java.util.stream.Collectors;
import java.util.stream.IntStream;
```

```java
 public static String getRoleHierarchy() {
  return IntStream.range(0, YourRoleEnum.values().length - 1)
          .mapToObj(i -> "ROLE_" + YourRoleEnum.values()[i].name() + " > " + "ROLE_" + YourRoleEnum.values()[i + 1].name())
          .collect(Collectors.joining("\n"));
 }
```

## on your WebSecurity Configuration

```java
import org.springframework.context.annotation.Bean;
import org.springframework.security.access.hierarchicalroles.RoleHierarchy;
import org.springframework.security.access.hierarchicalroles.RoleHierarchyImpl;
```

```java
 @Bean
 static RoleHierarchy roleHierarchy() {
  final RoleHierarchyImpl hierarchy = new RoleHierarchyImpl();
  hierarchy.setHierarchy(YourRoleEnum.getRoleHierarchy());
  return hierarchy;
 }
```
