import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class MyServlet extends HttpServlet {

    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        PrintWriter out = resp.getWriter();
        out.print("<html><head><title>Form</title></head><body>");
        out.print("<h1>Please fill the below required Information</h1>");
        out.print("<form method='post'>");
        out.print("Name: <input name='name'/></br></br>");
        out.print("Email Address: <input name='email'/></br></br>");
        out.print("Problem: <input name='problem'/></br></br>");
        out.print("Problem Description: <textarea name='desc'></textarea></br></br>");
        out.print("<input type='submit' value='help'/>");
        out.print("</form>");
        out.print("</body></html>");
    }

    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        PrintWriter out = resp.getWriter();
        out.print("<html><head><title>Resp</title></head><body>");
        out.print("Thank you! " + req.getParameter("name") + " for contacting us. You should receive reply from " +
                "us with in 24 hrs in your email address " + req.getParameter("email") + ". Let us know in our " +
                "support email " + this.getServletContext().getInitParameter("support-email") + " if you don’t " +
                "receive reply within 24 hrs. Please be sure to attach your reference " + req.getRequestedSessionId() +
                " in your email.");
        out.print("</body></html>");
    }
}
