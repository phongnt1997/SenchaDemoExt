/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package utils;

import java.io.Serializable;
import java.sql.Connection;
import java.sql.SQLException;
import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;

/**
 *
 * @author PhongNT
 */
public class ConnectionUtil implements Serializable {

    public static Connection makeConnection() 
            throws /*ClassNotFoundException,*/ SQLException, NamingException {

        Context context = new InitialContext();
        Context tomcat = (Context) context.lookup("java:comp/env");
        DataSource ds = (DataSource) tomcat.lookup("PHONG");
        Connection con = ds.getConnection();
        return con;
        
}
}