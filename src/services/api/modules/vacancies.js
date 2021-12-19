import http from "@/services/http";

export default {
  getAllVacancies() {
    return http.get("/GetAllVacancies");
  },
};
