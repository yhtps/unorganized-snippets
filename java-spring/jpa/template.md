# jpa-templates

## Entity

[AttendanceEntity](https://github.com/yhtps/unorganized-snippets/blob/main/java-spring/jpa/template/AttendanceEntity.java),
[UserEntity](https://github.com/yhtps/unorganized-snippets/blob/main/java-spring/jpa/template/UserEntity.java)

```java
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
```

```java
@Builder
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Entity
```

```java
 @Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 private long id;
```

## MappedSuperclass

[BaseTime](https://github.com/yhtps/unorganized-snippets/blob/main/java-spring/jpa/template/BaseTime.java)

```java
import java.time.LocalDateTime;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import jakarta.persistence.Column;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.MappedSuperclass;
import lombok.Getter;
import lombok.Setter;
```

```java
@Getter
@EntityListeners(AuditingEntityListener.class)
@MappedSuperclass
```

```java
 @CreatedDate
 @Column(updatable = false)
 private LocalDateTime createdDate;

 @LastModifiedDate
 private LocalDateTime updatedDate;
```
