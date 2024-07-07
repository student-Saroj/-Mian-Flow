import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/todo")
public class TodoListServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    private List<String> tasks = new ArrayList<>();

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("application/json");
        resp.getWriter().write(getTasksAsJson());
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String task = req.getParameter("task");
        tasks.add(task);
        resp.setStatus(201); // Created
    }

    @Override
    protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String task = req.getParameter("task");
        tasks.remove(task);
        resp.setStatus(204); // No Content
    }

    private String getTasksAsJson() {
        StringBuilder json = new StringBuilder("[");
        for (String task : tasks) {
            json.append("\"").append(task).append("\",");
        }
        json.deleteCharAt(json.length() - 1); // remove trailing comma
        json.append("]");
        return json.toString();
    }
}