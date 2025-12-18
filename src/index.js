export default {
  async fetch(request, env) {
    // Trình duyệt yêu cầu file gì thì trả về file đó từ thư mục assets (public)
    return env.ASSETS.fetch(request);
  },
};
