package com.example.prj;

import java.util.stream.Collectors;
import java.util.stream.IntStream;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.experimental.Accessors;

@Getter
@Accessors(fluent = true)
@RequiredArgsConstructor
public enum Role {

	ADMIN("a"),
	MANAGER("mn"),
	MEMBER("u"),
	GUEST("g");

	private final String abbr;

	public static String roleHierarchy() {
		return IntStream.range(0, Role.values().length - 1)
				.mapToObj(i -> "ROLE_" + Role.values()[i].name() + " > ROLE_" + Role.values()[i + 1].name())
				.collect(Collectors.joining("\n"));
	}

}
