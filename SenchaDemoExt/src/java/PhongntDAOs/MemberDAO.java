/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package PhongntDAOs;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;
import phongntDTOs.MemberDTO;
import utils.ConnectionUtil;

/**
 *
 * @author PhongNT
 */
public class MemberDAO {
    private PreparedStatement prs;
    private Connection cn;
    private ResultSet rs;
    
    private void closeConnection() {
        try {
            if(rs != null) {
            rs.close();
            
            if(prs != null) {
                prs.close();
            }
            
            if(cn != null) {
                cn.close();
            }
        }
        } catch (Exception e) {
            e.printStackTrace();
        }
        
    }
    
    public boolean insert(String firstname, String lastname) throws Exception{
        boolean check = false;
        try {
            String sql = "insert into Member values(?, ?)";
            cn = ConnectionUtil.makeConnection();
            prs = cn.prepareStatement(sql);
            prs.setString(1, firstname);
            prs.setString(2, lastname);
          
          
            check = prs.executeUpdate() > 0;
            
            
            
        } finally {
            closeConnection();
        } 
        
        return check;
    }
    
    public List<MemberDTO> getAllMember() {
        List<MemberDTO> result = null;
        try {
            String sql = "Select id, first_name, last_name from Member";
            cn = ConnectionUtil.makeConnection();
            prs = cn.prepareStatement(sql);
            rs = prs.executeQuery();
            int id = 0;
            String firstname = null;
            String lastname = null;
            
            result = new ArrayList<>();
            while (rs.next()) { 
                id = rs.getInt("id");
                firstname = rs.getString("first_name");
                lastname = rs.getString("last_name");
               
                MemberDTO dto = new MemberDTO(id, firstname, lastname);
                result.add(dto);
            }
            
        }catch (Exception e) {
            e.printStackTrace();
        }finally {
            closeConnection();
        }
        return result;
    }
    
    public boolean update(int id, String firstname, String lastname) throws Exception {
        boolean check = false;
        try {
            String sql = "Update Member set first_name = ?, last_name = ? where id =?";
            cn = ConnectionUtil.makeConnection();
            prs = cn.prepareStatement(sql);
            prs.setString(1, firstname);
            prs.setString(2, lastname);
            prs.setInt(3, id);
          
            check = prs.executeUpdate() > 0;
            
            
            
        } finally {
            closeConnection();
        } 
        
        return check;
    }
    
    public boolean delete(int id) throws Exception {
        boolean check = false;
        try {
            String sql = "Delete Member where id =?";
            cn = ConnectionUtil.makeConnection();
            prs = cn.prepareStatement(sql);
            prs.setInt(1, id);
          
            check = prs.executeUpdate() > 0;
            
            
            
        } finally {
            closeConnection();
        } 
        
        return check;
    }
    
    
}
