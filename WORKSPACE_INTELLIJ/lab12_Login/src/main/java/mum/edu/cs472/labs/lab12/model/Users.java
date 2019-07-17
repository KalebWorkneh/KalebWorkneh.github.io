package mum.edu.cs472.labs.lab12.model;

import java.util.ArrayList;
import java.util.List;

public class Users {

    private List<User> users = new ArrayList<>();
    {
        users.add(new User("john","1230","John K. Dany"));
        users.add(new User("merry","4231","Merry S. Thompson"));
        users.add(new User("anna","0123","Anna K. Portski"));
    }

    public Users() {
    }

    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }

    public void addUser(User u){
        users.add(u);
    }
}
