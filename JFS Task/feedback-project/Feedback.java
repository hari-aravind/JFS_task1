Task 2 - Feedback Project

package feedbackappproject;
import javax.servlet.http.HttpServlet;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.*;
import java.sql.PreparedStatement;
import java.sql.SQLException;
public class Feedback extends HttpServlet {
    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        String userName = req.getParameter("yourName");
        String bookName = req.getParameter("bookName");
        String feedBack = req.getParameter("feedBack");

        Connection connection = null;
        PreparedStatement preparedStatement = null;

        try {
            try {
                Class.forName("com.mysql.jdbc.Driver");
            } catch (ClassNotFoundException e) {
                throw new RuntimeException(e);
            }
            connection = DriverManager.getConnection("jdbc:mysql://localhost/feedbackform?user=root&password=Root@123");

            String sql = "INSERT INTO feedbackform (Yourname, Bookname, Feedback) VALUES (?, ?, ?)";
            preparedStatement = connection.prepareStatement(sql);
            preparedStatement.setString(1, userName);
            preparedStatement.setString(2, bookName);
            preparedStatement.setString(3, feedBack);

            preparedStatement.executeUpdate();
            res.getWriter().println("Feedback was saved");

        } 
            catch (SQLException e) {
            e.printStackTrace();
            res.getWriter().println("Error exists! Please check");
        } 
            finally {
            if (connection != null) {
                try {
                    connection.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
            if (preparedStatement != null) {
                try {
                    preparedStatement.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
    }

}