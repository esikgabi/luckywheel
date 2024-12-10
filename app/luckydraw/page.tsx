'use client';
import Navigation from '@/components/Navigation';
import SpinWheel from '@/components/SpinWheel';
import React, { useState } from 'react';

const Page = () => {
  const [names, setNames] = useState<string[]>(
      ["Which technologies have you used during your most recent project?",
       "What was the biggest challenge in your past project?",
       "What is DRY principle?",
       "What are SOLID principles?",
       "What is a clean code in your opinion?",
       "What are the main OOP Principles?",
       "Microservice architecture and domain-driven design.",
       "How do microservices communicate?",
       "How to handle transaction in a microservice environment?",
       "What is CQRS microservice pattern?",
       "Design patterns",
       "Name two design patterns from each of the 3 main groups.",
       "What is a REST API?",
       "What are common HTTP methods in REST you have used?",
       "What is the difference between Sync vs async calls?",
       "What are High cohesion and Loose coupling?",
       "What is the difference between Authentication and Authorization?",
       "What do you check on a code review?",
       "What is a JWT? How does it work?",
       "What are the inheritance rules in Java?",
       "What is the order of initialization in a Java class? (constructor child/super, static child/super)",
       "What is the difference between Abstract class vs. Interface and when to use them?",
       "Access modifiers on variables & methods.",
       "Static, Final on variables & classes.",
       "Hierarchy of the Exceptions in Java meaning of checked-unchecked,",
       "What are immutable and mutable?",
       "What are the benefits of immutable objects? eg: Strings",
       "How it is able to create an immutable object?",
       "What is the difference between  == and .equals()?",
       "equals() and hashCode contract",
       "What are the components of a Java function's signature?",
       "What are the features of Java 8?",
       "What is Stream API? Name the two group of stream operations with some example.",
       "What is a functional interface?",
       "What are the features of Java 11+?",
       "Name some interfaces and their implementation from the Collection framework.",
       "What is the difference between ArrayList vs LinkedList?",
       "HashSet - How it works and how it ensures the uniqueness?",
       "How would you implement a simple queue and with which collection?",
       "Difference between ordered and sorted",
       "Thread lifecycles",
       "Thread vs Runnable, when can you run it, how?",
       "Try with resources",
       "What is the difference between Comparable vs Comparator? When to use?",
       "Name some of the Java Stream Collectors.",
       "What is Atomic? Why and when it is useful?",
       "Speak about ConcurrentHashMap.",
       "What does the keyword \"Synchronized\" mean?",
       "Difference Between orElse and orElseGet() in Optional Class",
       "What does Deadlock mean?",
       "Name some Lombok annotations.",
       "In which stage the Lombok code gets generated?",
       "Speak about SynchronizedList.",
       "Explain Java memory model.",
       "What is the difference between Shallow Copy vs Deep Copy?",
       "The advantages of the Spring framework?",
       "What are the Spring Boot Starters?",
       "Name some Spring annotations you've used in the past.",
       "What bean scopes Spring have?",
       "What is Spring IoC?",
       "What is Autowiring in Spring? (Setter, field & constructor injection)",
       "Spring, Spring MVC basics",
       "What design patterns have you seen in Spring?",
       "What fetch types Hibernate have?",
       "What inheritance types Hibernate have?",
       "How Spring Security works under the hood?",
       "What are the Filter Chains in Spring Security?",
       "@Transactional - How it works?",
       "@EnableCaching - What happens under the hood?",
       "What observability tools have you used?",
       "What CI/CD stands for and how do they work?",
       "CI/CD basic definitions, what is the difference?",
       "How would you build up CI/CD from scratch, what stages would be included?",
       "What databases did you use?",
       "How do you decide what database to use? ",
       "Compare 2 databases, pros and cons",
       "What is the difference between SQL vs. NoSQL?",
       "What ACID means?",
       "Name some ways of SQL Query tuning/optimization.",
       "What are the database indexes?",
       "Given a table with multiple indexes, which one was used for a particular query?",
       "How would you synchronize the data between two databases?",
       "How would you detect the root cause of a performance drop (which query is slow) at the (relational) database level?",
       "What kind of testing have you used in your most recent project?",
       "What is the testing pyramid?",
       "What is the difference between unit and integration tests?",
       "What are test doubles?",
       "What testing frameworks did you use?",
       "What design patterns are used in junit 5?",
       "How do you deal with dependencies during testing?",
       "What is the difference between Mockito mock and spy?",
       "How would you mock a static method with Mockito?",
       "How can you be confident of test coverage in a microservice?",
       "Have you heard about FIRST principles?",
       "What is agile software development? Have you used them before?",
       "Kanban vs. Scrum: What's the Difference?",
       "Scrum ceremonies",
       "How would you estimate task complexity and time in Scrum?",
       "What are story points in Scrum?",
       "What is the difference between git merge and rebase?",
       "Which Maven plugins did you use earlier?",
       "Used software project management tools",
       "What is the purpose of Maven scopes?",
       "How would you use two incompatible versions of the same Maven dependency if both of the versions are required?",
       "What is Kubernetes?",
       "What is Kafka?",
       "What is Docker?",
       "Do you have any experience with Azure/AWS?"
      ]);
  const [name, setName] = useState('');

  const handleAddName = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (name.trim()) {
      setNames((prevNames) => [...prevNames, name.trim()]);
      setName('');
    }
  };

  return (
    <>
      <Navigation />
      <div className="h-screen py-20 px-2  ">
        <div className="grid grid-cols-12 gap-4 items-center h-full ">
          <div className="p-10 lg:-mt-20" style={{gridColumn: "4 / span 6"}}>
            <SpinWheel names={names} setNames={setNames} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
