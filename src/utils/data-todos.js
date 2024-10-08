let todos = [
  {
    id: 1,
    title: "Mengerjakan tugas matematika",
    description: "Selesaikan soal integral",
    is_finished: 0,
    cover: null,
    created_at: "2024-02-26T02:34:26.000000Z",
    updated_at: "2024-02-26T02:44:47.000000Z",
  },
  {
    id: 2,
    title: "Presentasi kelompok",
    description: "Presentasi mata kuliah sistem operasi",
    is_finished: 1,
    cover: null,
    created_at: "2024-02-27T10:00:00.000000Z",
    updated_at: "2024-02-27T12:00:00.000000Z",
  },
  {
    id: 3,
    title: "Membaca materi algoritma",
    description: "Review materi tentang rekursi",
    is_finished: 0,
    cover: null,
    created_at: "2024-02-28T09:30:00.000000Z",
    updated_at: "2024-02-28T11:00:00.000000Z",
  },
  {
    id: 4,
    title: "Latihan coding",
    description: "Kerjakan soal di LeetCode",
    is_finished: 1,
    cover: null,
    created_at: "2024-03-01T08:15:00.000000Z",
    updated_at: "2024-03-01T09:30:00.000000Z",
  },
  {
    id: 5,
    title: "Mengerjakan tugas kelompok",
    description: "Menyusun laporan proyek akhir",
    is_finished: 0,
    cover: null,
    created_at: "2024-03-02T10:45:00.000000Z",
    updated_at: "2024-03-02T11:30:00.000000Z",
  },
  {
    id: 6,
    title: "Menghadiri kuliah umum",
    description: "Kuliah umum tentang AI",
    is_finished: 1,
    cover: null,
    created_at: "2024-03-03T13:00:00.000000Z",
    updated_at: "2024-03-03T15:00:00.000000Z",
  },
  {
    id: 7,
    title: "Praktikum fisika",
    description: "Lakukan eksperimen gerak harmonik",
    is_finished: 0,
    cover: null,
    created_at: "2024-03-04T08:00:00.000000Z",
    updated_at: "2024-03-04T10:00:00.000000Z",
  },
  {
    id: 8,
    title: "Diskusi kelompok tugas akhir",
    description: "Meeting untuk pembagian tugas",
    is_finished: 1,
    cover: null,
    created_at: "2024-03-05T14:30:00.000000Z",
    updated_at: "2024-03-05T16:00:00.000000Z",
  },
  {
    id: 9,
    title: "Mengerjakan tugas pemrograman",
    description: "Selesaikan tugas membuat game sederhana",
    is_finished: 0,
    cover: null,
    created_at: "2024-03-06T11:45:00.000000Z",
    updated_at: "2024-03-06T13:00:00.000000Z",
  },
  {
    id: 10,
    title: "Mengikuti ujian tengah semester",
    description: "Ujian mata kuliah matematika diskrit",
    is_finished: 1,
    cover: null,
    created_at: "2024-03-07T08:30:00.000000Z",
    updated_at: "2024-03-07T11:00:00.000000Z",
  },
  {
    id: 11,
    title: "Mengerjakan tugas lab",
    description: "Menulis laporan praktikum fisika",
    is_finished: 0,
    cover: null,
    created_at: "2024-03-08T09:00:00.000000Z",
    updated_at: "2024-03-08T11:30:00.000000Z",
  },
  {
    id: 12,
    title: "Membuat presentasi tugas akhir",
    description: "Siapkan slide presentasi untuk sidang",
    is_finished: 1,
    cover: null,
    created_at: "2024-03-09T12:00:00.000000Z",
    updated_at: "2024-03-09T14:00:00.000000Z",
  },
  {
    id: 13,
    title: "Review materi ujian",
    description: "Review materi untuk ujian akhir semester",
    is_finished: 0,
    cover: null,
    created_at: "2024-03-10T14:15:00.000000Z",
    updated_at: "2024-03-10T16:30:00.000000Z",
  },
  {
    id: 14,
    title: "Mengikuti seminar",
    description: "Seminar penelitian teknologi blockchain",
    is_finished: 1,
    cover: null,
    created_at: "2024-03-11T09:30:00.000000Z",
    updated_at: "2024-03-11T12:00:00.000000Z",
  },
  {
    id: 15,
    title: "Menghadiri kelas tambahan",
    description: "Kelas tambahan pemrograman C++",
    is_finished: 0,
    cover: null,
    created_at: "2024-03-12T10:00:00.000000Z",
    updated_at: "2024-03-12T12:00:00.000000Z",
  },
  {
    id: 16,
    title: "Mengerjakan tugas akhir mata kuliah",
    description: "Submit tugas akhir untuk mata kuliah jaringan",
    is_finished: 1,
    cover: null,
    created_at: "2024-03-13T14:30:00.000000Z",
    updated_at: "2024-03-13T17:00:00.000000Z",
  },
  {
    id: 17,
    title: "Membaca jurnal penelitian",
    description: "Baca jurnal terkait AI untuk tugas akhir",
    is_finished: 0,
    cover: null,
    created_at: "2024-03-14T11:00:00.000000Z",
    updated_at: "2024-03-14T13:00:00.000000Z",
  },
  {
    id: 18,
    title: "Mengikuti workshop",
    description: "Workshop mengenai pengembangan aplikasi mobile",
    is_finished: 1,
    cover: null,
    created_at: "2024-03-15T09:00:00.000000Z",
    updated_at: "2024-03-15T11:00:00.000000Z",
  },
  {
    id: 19,
    title: "Latihan ujian coding",
    description: "Latihan soal ujian coding untuk pemrograman Java",
    is_finished: 0,
    cover: null,
    created_at: "2024-03-16T12:30:00.000000Z",
    updated_at: "2024-03-16T15:00:00.000000Z",
  },
  {
    id: 20,
    title: "Menyelesaikan laporan magang",
    description: "Selesaikan laporan magang sebelum deadline",
    is_finished: 1,
    cover: null,
    created_at: "2024-03-17T14:00:00.000000Z",
    updated_at: "2024-03-17T16:00:00.000000Z",
  },
];
function getAllTodo() {
  return todos;
}
function getTodo(id) {
  return todos.find((todo) => todo.id == id);//iniPerbaikan
}
function addTodo({ title, description }) {
  todos = [
    ...todos,
    {
      id: +new Date(),
      title,
      description,
      is_finished: 0,
      cover: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  ];
}
function editTodo({ id, title, description, is_finished }) {
  todos = todos.map((todo) => {
    if (todo.id === id) {
      todo.title = title;
      todo.description = description;
      todo.is_finished = is_finished;
      todo.updated_at = new Date().toISOString();
    }
    return todo;
  });
}
function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
}
export { getAllTodo, getTodo, addTodo, editTodo, deleteTodo };
