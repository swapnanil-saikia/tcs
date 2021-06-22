package com.sapient.trg.pl;

import java.time.LocalDate;

import com.sapient.trg.service.Person;

/**
 * Hello world!
 *
 */
public class App {
    public static void main( String[] args ) {
       // creating instance of a class
    	
    	Person person1 = new Person();
    	
    	person1.setPersonId(1);
    	person1.setFirstName("Ravi");
    	person1.setLastName("kumar");
    	
    	System.out.println(person1.getPersonId() + " ,"+person1.getFirstName() + " ,"+person1.getLastName());
    
    	Person person2 = new Person(2,"virat", "kohli",LocalDate.of(1996,  10,15),9804739292L);
    	
    	System.out.println(person2.getPersonId() + " ,"+person2.getFirstName() + " ,"+person2.getLastName());

    	
    }
}
