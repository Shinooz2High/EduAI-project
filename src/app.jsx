import React, { useState, useEffect, useRef } from "react";
import {
  Sparkles,
  BookOpen,
  CheckCircle2,
  Award,
  Send,
  Bot,
  ChevronRight,
  FileText,
  Lock,
  Edit3,
  Settings,
  Key,
  Save,
  ShieldCheck,
  RefreshCw,
  AlertCircle,
  Check,
  X,
  Bookmark,
  Edit,
  Sun,
  Moon,
  Maximize2,
  Minimize2,
  PanelLeftOpen,
  PanelLeftClose,
  Volume2,
  VolumeX,
  Play,
  Pause,
  SkipForward,
  Mic,
  ArrowRight,
  BarChart3,
  Plus,
  Languages
} from "lucide-react";

// --- HỆ THỐNG DỮ LIỆU ĐẦY ĐỦ 124 TRANG SỔ TAY TOÁN THCS (LỚP 6, 7, 8, 9 - 27 CHƯƠNG) ---
const INITIAL_CURRICULUM_DATA = {
  grade6: {
    id: "grade6",
    name: "Khối Lớp 6",
    courses: [
      {
        id: "g6-ds",
        title: "A. Đại số 6 (Toàn bộ 3 Chương)",
        lessons: [
          {
            id: "g6-ds-c1",
            title: "Chương I: Số tự nhiên (Tập hợp, Lũy thừa, Chia hết, ƯCLN & BCNN)",
            theory: `### 1. Tập hợp. Phần tử của tập hợp. Ghi số tự nhiên (Trang 2-3)
• Tập hợp là khái niệm cơ bản không định nghĩa. Có hai cách viết tập hợp:
  - Liệt kê các phần tử của tập hợp.
  - Chỉ ra tính chất đặc trưng cho các phần tử.
• Ký hiệu: a ∈ A (a thuộc A); b ∉ A (b không thuộc A).
• N = {0; 1; 2; 3; ...} là tập hợp số tự nhiên; N* = {1; 2; 3; ...} là tập hợp số tự nhiên khác 0.
• Ghi số trong hệ thập phân: Cứ 10 đơn vị ở một hàng làm thành một đơn vị ở hàng liền trước nó.
  - Số có 2 chữ số: ab = 10a + b.
  - Số có 3 chữ số: abc = 100a + 10b + c.
• Chữ số La Mã: I (1), V (5), X (10), L (50), C (100), D (500), M (1000). Mỗi chữ số không viết liền nhau quá 3 lần. Chữ số nhỏ đứng trước làm giảm giá trị chữ số lớn.

### 2. Số phần tử của tập hợp. Tập hợp con (Trang 2-3)
• Tập hợp rỗng ký hiệu là ∅.
• A ⊂ B: Mọi phần tử của A đều thuộc B. Nếu A ⊂ B và B ⊂ A thì A = B.
• Công thức số phần tử của dãy số tự nhiên cách đều d đơn vị:
  Số phần tử = (b - a) : d + 1
• Nếu một tập hợp có n phần tử thì số tập hợp con của nó bằng 2ⁿ.

### 3. Các phép tính và Tính chất (Trang 3-4)
• Phép chia có dư: a = b · q + r (với 0 ≤ r < b).
• Tính chất giao hoán: a + b = b + a; a · b = b · a.
• Tính chất kết hợp: (a + b) + c = a + (b + c); (a · b) · c = a · (b · c).
• Phân phối của phép nhân đối với phép cộng: a(b + c) = ab + ac; a(b - c) = ab - ac.
• Công thức tính tổng dãy số cách đều: Tổng = (Số đầu + Số cuối) · (Số số hạng) : 2.

### 4. Lũy thừa với số mũ tự nhiên (Trang 4)
• Định nghĩa: aⁿ = a · a · ... · a (n thừa số a, n ≠ 0). Quy ước: a¹ = a; a⁰ = 1 (a ≠ 0).
• Nhân hai lũy thừa cùng cơ số: aᵐ · aⁿ = aᵐ⁺ⁿ.
• Chia hai lũy thừa cùng cơ số: aᵐ : aⁿ = aᵐ⁻ⁿ (a ≠ 0, m ≥ n).
• Mở rộng: (aᵐ)ⁿ = aᵐ·ⁿ; (a · b)ⁿ = aⁿ · bⁿ. Số chính phương là bình phương của một số tự nhiên.

### 5. Thứ tự thực hiện phép tính (Trang 5)
• Biểu thức không có ngoặc: Lũy thừa → Nhân và chia → Cộng và trừ (tính từ trái sang phải).
• Biểu thức có dấu ngoặc: ( ) → [ ] → { }.

### 6. Tính chất chia hết của một tổng & Dấu hiệu chia hết (Trang 5-6)
• Tính chất 1: a ⋮ m, b ⋮ m, c ⋮ m ⇒ (a + b + c) ⋮ m.
• Chia hết cho 2: Tận cùng là 0, 2, 4, 6, 8. Chia hết cho 5: Tận cùng là 0 hoặc 5.
• Chia hết cho 3: Tổng các chữ số chia hết cho 3. Chia hết cho 9: Tổng các chữ số chia hết cho 9.

### 7. Số nguyên tố, Hợp số, ƯCLN và BCNN (Trang 6-7)
• Số nguyên tố là số tự nhiên lớn hơn 1, chỉ có 2 ước là 1 và chính nó. Số 2 là số nguyên tố chẵn duy nhất.
• Cách tính số lượng ước của m = aˣ · bʸ · cᶻ: Số ước = (x + 1)(y + 1)(z + 1).
• Công thức liên hệ: a · b = ƯCLN(a, b) · BCNN(a, b).`,
            quiz: [
              { question: "Kết quả của phép tính 5⁹ : 5⁷ bằng:", options: ["5²", "5¹⁶", "5⁶³", "1²"], correctIndex: 0, explanation: "Giữ nguyên cơ số 5, trừ số mũ: 9 - 7 = 2 => 5²." },
              { question: "Số phần tử của tập hợp C = {18; 20; 22; ...; 100} là:", options: ["42", "82", "41", "83"], correctIndex: 0, explanation: "(100 - 18) : 2 + 1 = 42 phần tử." },
              { question: "Trong các số sau, số nào chia hết cho cả 2, 3, 5 và 9?", options: ["9180", "825", "2025", "1230"], correctIndex: 0, explanation: "9180 tận cùng là 0 (chia hết 2, 5) và tổng chữ số = 18 chia hết cho 3 và 9." },
              { question: "Nếu một tập hợp có 4 phần tử thì số tập hợp con của nó là:", options: ["16", "8", "4", "12"], correctIndex: 0, explanation: "Số tập con bằng 2⁴ = 16." },
              { question: "Số 72 phân tích ra thừa số nguyên tố là 72 = 2³ · 3². Số lượng ước tự nhiên của 72 là:", options: ["12 ước", "6 ước", "5 ước", "9 ước"], correctIndex: 0, explanation: "Số ước = (3 + 1)(2 + 1) = 12." },
              { question: "Cho biết ƯCLN(a, b) = 6 và BCNN(a, b) = 36. Tích a · b bằng:", options: ["216", "42", "30", "6"], correctIndex: 0, explanation: "a · b = ƯCLN · BCNN = 6 · 36 = 216." },
              { question: "Tập hợp các số tự nhiên khác 0 được ký hiệu là:", options: ["N*", "N", "Z", "Q"], correctIndex: 0, explanation: "N* = {1; 2; 3; ...}." },
              { question: "Quy ước nào sau đây là ĐÚNG với a ≠ 0?", options: ["a⁰ = 1", "a⁰ = 0", "a¹ = 0", "a⁰ = a"], correctIndex: 0, explanation: "Quy ước lũy thừa: a⁰ = 1." },
              { question: "Kết quả của phép nhân 3⁴ · 3² dưới dạng một lũy thừa là:", options: ["3⁶", "3⁸", "9⁶", "9⁸"], correctIndex: 0, explanation: "3⁴ · 3² = 3⁴⁺² = 3⁶." },
              { question: "Thứ tự thực hiện phép tính đúng đối với biểu thức có ngoặc là:", options: ["( ) → [ ] → { }", "[ ] → ( ) → { }", "{ } → [ ] → ( )", "( ) → { } → [ ]"], correctIndex: 0, explanation: "Thực hiện ( ) trước, đến [ ], cuối cùng { }." },
              { question: "Số nào sau đây là số nguyên tố?", options: ["29", "21", "27", "33"], correctIndex: 0, explanation: "29 chỉ có 2 ước là 1 và 29." },
              { question: "Số tự nhiên x nhỏ nhất khác 0 biết x ⋮ 12 và x ⋮ 18 là:", options: ["36", "72", "216", "6"], correctIndex: 0, explanation: "x = BCNN(12, 18) = 36." }
            ],
            trueFalse: [
              { statement: "Số 2 là số nguyên tố chẵn duy nhất.", correct: true, explanation: "Đúng. Các số chẵn khác 2 đều có ước là 2 nên là hợp số." },
              { statement: "Tập hợp N* chứa số 0.", correct: false, explanation: "Sai. N* chỉ gồm các số tự nhiên từ 1 trở đi." },
              { statement: "Nếu mọi phần tử của tập hợp A đều thuộc B thì A = B.", correct: false, explanation: "Sai. Đó là điều kiện A ⊂ B, chỉ bằng nhau khi B cũng là con của A." },
              { statement: "Số chia hết cho 9 thì chắc chắn chia hết cho 3.", correct: true, explanation: "Đúng. Vì 9 chia hết cho 3." }
            ],
            shortAnswer: [
              { id: "sa-1", question: "Tính tổng S = 1 + 2 + 3 + ... + 999:", correctAnswer: "499500", rubric: "Số số hạng: 999. Tổng = (1 + 999) · 999 : 2 = 499500." },
              { id: "sa-2", question: "Tìm chữ số * để số 12* chia hết cho cả 2 và 5:", correctAnswer: "0", rubric: "Để chia hết cho cả 2 và 5 thì chữ số tận cùng phải là 0." },
              { id: "sa-3", question: "Tính giá trị biểu thức: 100 : { 250 : [450 - (500 - 4 · 25)] }", correctAnswer: "20", rubric: "500 - 100 = 400; 450 - 400 = 50; 250 : 50 = 5; 100 : 5 = 20." },
              { id: "sa-4", question: "Học sinh xếp hàng 3, 4, 7, 9 vừa đủ. Số học sinh trong khoảng 1600 đến 2000. Tính số học sinh:", correctAnswer: "1764", rubric: "BCNN(3,4,7,9) = 252. Bội của 252 trong khoảng [1600; 2000] là 252 · 7 = 1764." }
            ]
          },
          {
            id: "g6-ds-c2",
            title: "Chương II: Số nguyên (Z, Giá trị tuyệt đối, Quy tắc chuyển vế & Dấu ngoặc)",
            theory: `### 1. Tập hợp số nguyên và Thứ tự trong Z (Trang 8)
• Tập hợp số nguyên: Z = {..., -3, -2, -1, 0, 1, 2, 3, ...} gồm nguyên âm, số 0 và nguyên dương. N ⊂ Z.
• Trên trục số nằm ngang, điểm a nằm bên trái điểm b thì a < b.

### 2. Giá trị tuyệt đối của một số nguyên (Trang 8)
• Giá trị tuyệt đối của số nguyên a (ký hiệu |a|) là khoảng cách từ điểm a đến điểm O trên trục số.
• |a| ≥ 0 với mọi a. Hai số đối nhau có giá trị tuyệt đối bằng nhau: |a| = |-a|.

### 3. Phép tính số nguyên và Quy tắc (Trang 8-9)
• Cộng hai số nguyên âm: (-a) + (-b) = -(a + b). Hai số đối nhau có tổng bằng 0.
• Quy tắc chuyển vế: Khi chuyển một số hạng từ vế này sang vế kia của một đẳng thức, ta phải đổi dấu số hạng đó.
• Quy tắc dấu ngoặc: Bỏ dấu ngoặc có dấu "-" đằng trước phải đổi dấu tất cả các số hạng trong ngoặc.
• Nhân hai số nguyên: Cùng dấu ra dương (+), khác dấu ra âm (-).`,
            quiz: [
              { question: "Kết quả của phép tính (-237) + 55 là:", options: ["-182", "182", "-292", "292"], correctIndex: 0, explanation: "-(237 - 55) = -182." },
              { question: "Bỏ dấu ngoặc của biểu thức a - (b - c + d) ta được:", options: ["a - b + c - d", "a - b - c + d", "a + b - c - d", "a - b + c + d"], correctIndex: 0, explanation: "Trước ngoặc có dấu trừ nên đổi dấu tất cả số hạng bên trong." },
              { question: "Tìm x biết: x - (-15) = -5", options: ["x = -20", "x = 10", "x = -10", "x = 20"], correctIndex: 0, explanation: "x + 15 = -5 => x = -20." },
              { question: "Giá trị tuyệt đối của số nguyên -15 là:", options: ["15", "-15", "0", "±15"], correctIndex: 0, explanation: "|-15| = 15." },
              { question: "Tích của 5 số nguyên âm là:", options: ["Một số nguyên âm", "Một số nguyên dương", "Số 0", "Không xác định"], correctIndex: 0, explanation: "Số lượng thừa số âm lẻ (5) nên tích mang dấu âm." },
              { question: "Khẳng định nào sau đây là ĐÚNG?", options: ["-8 < -5", "-5 < -8", "-3 > 0", "0 < -2"], correctIndex: 0, explanation: "Trên trục số, điểm -8 nằm bên trái -5 nên -8 < -5." },
              { question: "Khi chuyển vế hạng tử -x từ vế trái sang vế phải, ta đổi thành:", options: ["+x", "-x", "1/x", "0"], correctIndex: 0, explanation: "Quy tắc chuyển vế đổi dấu trừ thành cộng." },
              { question: "Tính: (-4) · (-25) =", options: ["100", "-100", "29", "-29"], correctIndex: 0, explanation: "Nhân hai số cùng dấu âm ra số dương: 100." },
              { question: "Số nguyên âm lớn nhất là:", options: ["-1", "-9999", "0", "1"], correctIndex: 0, explanation: "-1 là số nguyên âm lớn nhất trong tập Z." },
              { question: "Tập hợp các ước của 6 trong Z là:", options: ["{±1; ±2; ±3; ±6}", "{1; 2; 3; 6}", "{±2; ±3}", "{0; ±6}"], correctIndex: 0, explanation: "Trong Z, ước của 6 gồm cả âm và dương." },
              { question: "Kết quả của (-80) + (-220) bằng:", options: ["-300", "300", "-140", "140"], correctIndex: 0, explanation: "-(80 + 220) = -300." },
              { question: "Cho a · b = 0. Khi đó:", options: ["a = 0 hoặc b = 0", "Cả a và b đều bằng 0", "a > 0 và b < 0", "a = 1"], correctIndex: 0, explanation: "Tích bằng 0 khi ít nhất một thừa số bằng 0." }
            ],
            trueFalse: [
              { statement: "Khoảng cách từ điểm a đến gốc 0 trên trục số không bao giờ là một số âm.", correct: true, explanation: "Đúng. Giá trị tuyệt đối luôn ≥ 0." },
              { statement: "Số 0 là ước của số nguyên 5.", correct: false, explanation: "Sai. Phép chia cho 0 không có nghĩa." },
              { statement: "Tập hợp số tự nhiên N là tập con của tập hợp số nguyên Z (N ⊂ Z).", correct: true, explanation: "Đúng." },
              { statement: "Tích của hai số nguyên khác dấu luôn là một số nguyên dương.", correct: false, explanation: "Sai. Tích hai số khác dấu luôn là số âm." }
            ],
            shortAnswer: [
              { id: "sa-1", question: "Tìm số nguyên x biết: 2x - 15 = -25", correctAnswer: "-5", rubric: "2x = -10 => x = -5." },
              { id: "sa-2", question: "Tính tổng: (-75) + 50 + (-25) + 150", correctAnswer: "100", rubric: "-100 + 200 = 100." },
              { id: "sa-3", question: "Tìm số tự nhiên n lớn nhất để (n + 3) chia hết cho (n - 1):", correctAnswer: "5", rubric: "4 ⋮ (n - 1) => n - 1 = 4 => n = 5." },
              { id: "sa-4", question: "Tính giá trị của biểu thức: |-18| - |+8| + |-2| · |-5|", correctAnswer: "20", rubric: "18 - 8 + 10 = 20." }
            ]
          },
          {
            id: "g6-ds-c3",
            title: "Chương III: Phân số (Quy đồng, Rút gọn, Hỗn số, Tỉ số phần trăm & 3 bài toán)",
            theory: `### 1. Khái niệm phân số và Tính chất cơ bản (Trang 10-11)
• Phân số có dạng a/b với a, b ∈ Z, b ≠ 0. Hai phân số bằng nhau: a/b = c/d ⇔ a · d = b · c.
• Phân số tối giản: Tử và mẫu chỉ có ước chung là 1 và -1.

### 2. Phép tính phân số & Ba bài toán cơ bản (Trang 10-12)
• Cộng/Trừ: Quy đồng mẫu dương rồi cộng/trừ tử. Nhân: (a·c)/(b·d). Chia: Nhân nghịch đảo.
• Bài toán 1: Tìm giá trị phân số m/n của số b cho trước: b · (m/n).
• Bài toán 2: Tìm một số biết m/n của nó bằng a: a : (m/n).
• Bài toán 3: Tỉ số phần trăm của a và b: [(a · 100) / b]%.`,
            quiz: [
              { question: "Hai phân số a/b và c/d (với b, d ≠ 0) bằng nhau khi:", options: ["a · d = b · c", "a · c = b · d", "a + d = b + c", "a : d = b : c"], correctIndex: 0, explanation: "Tích chéo a · d = b · c." },
              { question: "3/5 của số 45 bằng bao nhiêu?", options: ["27", "75", "15", "9"], correctIndex: 0, explanation: "45 · (3/5) = 27." },
              { question: "Biết 2/3 của một số bằng 18. Số đó là:", options: ["27", "12", "36", "54"], correctIndex: 0, explanation: "18 : (2/3) = 27." },
              { question: "Rút gọn phân số 24/36 về tối giản ta được:", options: ["2/3", "4/6", "12/18", "6/9"], correctIndex: 0, explanation: "Chia cả tử và mẫu cho 12 được 2/3." },
              { question: "Số nghịch đảo của phân số -3/7 là:", options: ["-7/3", "7/3", "3/7", "1"], correctIndex: 0, explanation: "Nghịch đảo của -3/7 là -7/3." },
              { question: "Tỉ số phần trăm của 3 và 4 là:", options: ["75%", "133%", "25%", "80%"], correctIndex: 0, explanation: "(3 · 100 : 4)% = 75%." },
              { question: "Kết quả của phép tính (-1/4) + 3/4 là:", options: ["1/2", "-1/2", "1", "2/8"], correctIndex: 0, explanation: "2/4 = 1/2." },
              { question: "Hỗn số 3 1/4 viết dưới dạng phân số là:", options: ["13/4", "7/4", "12/4", "3/4"], correctIndex: 0, explanation: "(3 · 4 + 1)/4 = 13/4." },
              { question: "Trên bản đồ tỉ lệ 1 : 1 000 000, khoảng cách 2cm ứng với thực tế là:", options: ["20 km", "2 km", "200 km", "2000 m"], correctIndex: 0, explanation: "2 000 000 cm = 20 km." },
              { question: "Tìm x biết x : (2/3) = -3/4:", options: ["-1/2", "-9/8", "-8/9", "1/2"], correctIndex: 0, explanation: "x = (-3/4) · (2/3) = -1/2." },
              { question: "Trong hai phân số có cùng mẫu dương, phân số nào lớn hơn?", options: ["Phân số có tử lớn hơn", "Phân số có tử nhỏ hơn", "Bằng nhau", "Không so sánh được"], correctIndex: 0, explanation: "Cùng mẫu dương, tử lớn hơn thì phân số lớn hơn." },
              { question: "Tính: (2/3) · (9/4) =", options: ["3/2", "6/12", "18/7", "5/7"], correctIndex: 0, explanation: "18/12 = 3/2." }
            ],
            trueFalse: [
              { statement: "Tỉ số của hai số không có đơn vị đo.", correct: true, explanation: "Đúng." },
              { statement: "Phân số tối giản là phân số có tử và mẫu là các số nguyên tố.", correct: false, explanation: "Sai. Chỉ cần tử và mẫu nguyên tố cùng nhau (ƯCLN = 1)." },
              { statement: "Muốn chia một phân số cho một phân số khác 0, ta nhân với số nghịch đảo của số chia.", correct: true, explanation: "Đúng." },
              { statement: "Mọi phân số đều viết được dưới dạng hỗn số.", correct: false, explanation: "Sai. Chỉ phân số dương lớn hơn 1 mới viết được dưới dạng hỗn số dương." }
            ],
            shortAnswer: [
              { id: "sa-1", question: "Một lớp có 40 học sinh, trong đó học sinh giỏi chiếm 25%. Tính số học sinh giỏi:", correctAnswer: "10", rubric: "40 · 25% = 10 học sinh." },
              { id: "sa-2", question: "Tính tổng S = 3/8 + (-5/12) (dạng phân số tối giản a/b):", correctAnswer: "-1/24", rubric: "9/24 - 10/24 = -1/24." },
              { id: "sa-3", question: "Biết 3/4 quãng đường dài 45km. Cả quãng đường dài bao nhiêu km?", correctAnswer: "60", rubric: "45 : (3/4) = 60 km." },
              { id: "sa-4", question: "Tính kết quả phép chia: (-5/7) : (15/14) (dạng a/b tối giản):", correctAnswer: "-2/3", rubric: "(-5/7) · (14/15) = -2/3." }
            ]
          }
        ]
      },
      {
        id: "g6-hh",
        title: "B. Hình học 6 (Toàn bộ 2 Chương)",
        lessons: [
          {
            id: "g6-hh-c1",
            title: "Chương I: Đoạn thẳng (Điểm, Đường thẳng, Tia, Trung điểm)",
            theory: `### 1. Điểm, Đường thẳng & Tia (Trang 13-14)
• Có một và chỉ một đường thẳng đi qua hai điểm phân biệt.
• Hai tia đối nhau: Chung gốc và tạo thành một đường thẳng.
• Nếu điểm M nằm giữa A và B thì AM + MB = AB.

### 2. Trung điểm của đoạn thẳng (Trang 14)
• Trung điểm M của đoạn thẳng AB là điểm nằm giữa A, B và cách đều hai đầu mút: MA = MB = AB / 2.`,
            quiz: [
              { question: "Cho đoạn thẳng AB = 12cm. Điểm M là trung điểm của AB thì độ dài MA bằng:", options: ["6cm", "12cm", "24cm", "4cm"], correctIndex: 0, explanation: "MA = AB / 2 = 6cm." },
              { question: "Trên tia Ox có OM = 4cm, ON = 9cm. Điểm nào nằm giữa hai điểm còn lại?", options: ["Điểm M nằm giữa O và N", "Điểm N nằm giữa O và M", "Điểm O nằm giữa M và N", "Không điểm nào"], correctIndex: 0, explanation: "Vì OM < ON nên M nằm giữa O và N." },
              { question: "Cho 3 điểm A, B, C không thẳng hàng. Vẽ được bao nhiêu đường thẳng đi qua các cặp điểm?", options: ["3 đường thẳng", "1 đường thẳng", "2 đường thẳng", "6 đường thẳng"], correctIndex: 0, explanation: "3 đường thẳng AB, BC, CA." },
              { question: "Hai tia đối nhau là hai tia:", options: ["Chung gốc và tạo thành một đường thẳng", "Chung gốc và không thẳng hàng", "Song song nhau", "Không có điểm chung"], correctIndex: 0, explanation: "Theo định nghĩa hai tia đối nhau." },
              { question: "Nếu AM + MB = AB thì kết luận nào sau đây đúng?", options: ["Điểm M nằm giữa A và B", "Điểm A nằm giữa M và B", "M là trung điểm AB", "A, M, B không thẳng hàng"], correctIndex: 0, explanation: "Hệ thức cộng độ dài đoạn thẳng." },
              { question: "Cho đoạn thẳng CD = 10cm. Điểm K nằm giữa C và D sao cho CK = 4cm. Độ dài KD là:", options: ["6cm", "14cm", "4cm", "5cm"], correctIndex: 0, explanation: "KD = 10 - 4 = 6cm." },
              { question: "Mỗi đoạn thẳng có bao nhiêu trung điểm?", options: ["Duy nhất 1 trung điểm", "2 trung điểm", "Vô số trung điểm", "Không có"], correctIndex: 0, explanation: "Chỉ có duy nhất 1 trung điểm." },
              { question: "Hai đường thẳng song song là hai đường thẳng:", options: ["Không có điểm chung nào", "Có đúng 1 điểm chung", "Có vô số điểm chung", "Trùng nhau"], correctIndex: 0, explanation: "Hai đường thẳng song song không có điểm chung." },
              { question: "Điểm O chia đường thẳng xy thành:", options: ["Hai tia đối nhau Ox và Oy", "Hai đoạn thẳng", "Một tia duy nhất", "Hai đường thẳng"], correctIndex: 0, explanation: "Tạo ra hai tia đối nhau." },
              { question: "Cho 4 điểm phân biệt thẳng hàng. Có tất cả bao nhiêu đoạn thẳng?", options: ["6 đoạn thẳng", "4 đoạn thẳng", "8 đoạn thẳng", "3 đoạn thẳng"], correctIndex: 0, explanation: "4 · 3 / 2 = 6 đoạn thẳng." },
              { question: "Độ dài đoạn thẳng AB là gì?", options: ["Khoảng cách giữa hai điểm A và B", "Một số âm", "Một đường thẳng", "Vô tận"], correctIndex: 0, explanation: "Khoảng cách giữa hai điểm A và B." },
              { question: "Khi hai điểm A và B trùng nhau, độ dài đoạn thẳng AB bằng:", options: ["0", "1", "Vô cực", "Không xác định"], correctIndex: 0, explanation: "Khoảng cách bằng 0." }
            ],
            trueFalse: [
              { statement: "Trung điểm của đoạn thẳng là điểm nằm giữa và cách đều hai đầu mút.", correct: true, explanation: "Đúng." },
              { statement: "Nếu MA = MB thì M chắc chắn là trung điểm của đoạn thẳng AB.", correct: false, explanation: "Sai. Cần thêm điều kiện M nằm giữa A và B." },
              { statement: "Qua ba điểm phân biệt bất kỳ luôn vẽ được một đường thẳng.", correct: false, explanation: "Sai. Chỉ vẽ được khi 3 điểm thẳng hàng." },
              { statement: "Hai tia phân biệt có thể có chung gốc.", correct: true, explanation: "Đúng." }
            ],
            shortAnswer: [
              { id: "sa-1", question: "Cho đoạn thẳng AB = 16cm. M là trung điểm AB, N là trung điểm AM. Tính MN (cm):", correctAnswer: "4", rubric: "AM = 8cm => MN = 4cm." },
              { id: "sa-2", question: "Trên đường thẳng lấy 6 điểm phân biệt. Có bao nhiêu đoạn thẳng tạo thành?", correctAnswer: "15", rubric: "6 · 5 / 2 = 15." },
              { id: "sa-3", question: "Điểm M nằm giữa A và B. Biết AM = 3,5cm và AB = 9cm. Tính MB (cm):", correctAnswer: "5.5", rubric: "9 - 3,5 = 5,5cm." },
              { id: "sa-4", question: "Điểm I là trung điểm của đoạn thẳng PQ. Biết IP = 7cm. Tính PQ (cm):", correctAnswer: "14", rubric: "PQ = 2 · 7 = 14cm." }
            ]
          },
          {
            id: "g6-hh-c2",
            title: "Chương II: Góc (Nửa mặt phẳng, Số đo góc, Phân giác, Đường tròn, Tam giác)",
            theory: `### 1. Góc & Quan hệ giữa các góc (Trang 15)
• Góc vuông = 90°; Góc nhọn: 0° < α < 90°; Góc tù: 90° < α < 180°; Góc bẹt = 180°.
• Hai góc phụ nhau có tổng bằng 90°. Hai góc bù nhau có tổng bằng 180°.

### 2. Tia phân giác của góc (Trang 15-16)
• Tia phân giác của góc là tia nằm giữa hai cạnh của góc và tạo với hai cạnh ấy hai góc bằng nhau: ∠xOz = ∠zOy = ∠xOy / 2.`,
            quiz: [
              { question: "Hai góc phụ nhau có tổng số đo bằng:", options: ["90°", "180°", "60°", "360°"], correctIndex: 0, explanation: "Tổng hai góc phụ nhau bằng 90°." },
              { question: "Cho hai góc kề bù ∠xOy và ∠yOz, biết ∠xOy = 70°. Số đo góc ∠yOz là:", options: ["110°", "20°", "70°", "130°"], correctIndex: 0, explanation: "180° - 70° = 110°." },
              { question: "Tia Oz là phân giác của góc ∠xOy = 130°. Số đo góc ∠xOz bằng:", options: ["65°", "130°", "50°", "260°"], correctIndex: 0, explanation: "130° : 2 = 65°." },
              { question: "Góc có số đo bằng 90° gọi là:", options: ["Góc vuông", "Góc nhọn", "Góc tù", "Góc bẹt"], correctIndex: 0, explanation: "Góc 90° là góc vuông." },
              { question: "Dây cung lớn nhất của đường tròn là:", options: ["Đường kính", "Bán kính", "Tiếp tuyến", "Cung tròn"], correctIndex: 0, explanation: "Đường kính là dây cung lớn nhất." },
              { question: "Đơn vị đo góc thông dụng là:", options: ["Độ, phút, giây", "Mét, centimet", "Lít", "Gram"], correctIndex: 0, explanation: "Độ, phút, giây." },
              { question: "Góc nhọn là góc có số đo:", options: ["Lớn hơn 0° và nhỏ hơn 90°", "Bằng 90°", "Lớn hơn 90°", "Bằng 180°"], correctIndex: 0, explanation: "0° < α < 90°." },
              { question: "Hai góc bù nhau có tổng số đo bằng:", options: ["180°", "90°", "360°", "100°"], correctIndex: 0, explanation: "Tổng bằng 180°." },
              { question: "Đường tròn (O; 5cm) có đường kính bằng:", options: ["10cm", "5cm", "2,5cm", "25cm"], correctIndex: 0, explanation: "d = 2R = 10cm." },
              { question: "Hình tròn là hình gồm:", options: ["Các điểm trên đường tròn và bên trong đường tròn đó", "Chỉ các điểm trên đường tròn", "Chỉ các điểm bên trong", "Tâm đường tròn"], correctIndex: 0, explanation: "Định nghĩa hình tròn." },
              { question: "Tam giác ABC có mấy đỉnh, mấy cạnh và mấy góc?", options: ["3 đỉnh, 3 cạnh, 3 góc", "4 đỉnh, 4 cạnh", "3 cạnh, 1 góc", "6 cạnh"], correctIndex: 0, explanation: "3 đỉnh, 3 cạnh, 3 góc." },
              { question: "Góc bẹt có số đo bằng:", options: ["180°", "90°", "360°", "120°"], correctIndex: 0, explanation: "Góc bẹt = 180°." }
            ],
            trueFalse: [
              { statement: "Hai góc kề bù là hai góc vừa kề nhau vừa bù nhau.", correct: true, explanation: "Đúng." },
              { statement: "Góc tù là góc có số đo lớn hơn 90°.", correct: false, explanation: "Sai. Phải nhỏ hơn 180° nữa." },
              { statement: "Mỗi góc (khác góc bẹt) chỉ có duy nhất một tia phân giác.", correct: true, explanation: "Đúng." },
              { statement: "Điểm nằm ngoài đường tròn có khoảng cách đến tâm nhỏ hơn bán kính.", correct: false, explanation: "Sai. Khoảng cách lớn hơn bán kính." }
            ],
            shortAnswer: [
              { id: "sa-1", question: "Cho hai góc phụ nhau ∠A và ∠B, biết ∠A = 35°. Tính ∠B (độ):", correctAnswer: "55", rubric: "90° - 35° = 55°." },
              { id: "sa-2", question: "Tia Om là phân giác góc xOy = 80°. Tia On là phân giác góc mOy. Tính góc xOn (độ):", correctAnswer: "60", rubric: "40° + 20° = 60°." },
              { id: "sa-3", question: "Đường tròn có đường kính bằng 18cm. Bán kính bằng bao nhiêu cm?", correctAnswer: "9", rubric: "18 / 2 = 9cm." },
              { id: "sa-4", question: "Cho tia Oy nằm giữa hai tia Ox, Oz sao cho ∠xOy = 45°, ∠yOz = 35°. Tính ∠xOz (độ):", correctAnswer: "80", rubric: "45° + 35° = 80°." }
            ]
          }
        ]
      }
    ]
  },
  grade7: {
    id: "grade7",
    name: "Khối Lớp 7",
    courses: [
      {
        id: "g7-ds",
        title: "A. Đại số 7 (Toàn bộ 4 Chương)",
        lessons: [
          {
            id: "g7-ds-c1",
            title: "Chương I: Số hữu tỉ & Số thực (Tỉ lệ thức, Dãy tỉ số bằng nhau & Căn bậc hai)",
            theory: `### 1. Số hữu tỉ & Tỉ lệ thức (Trang 17-18)
• Số hữu tỉ viết được dưới dạng phân số a/b (a, b ∈ Z, b ≠ 0). Tập hợp ký hiệu là Q.
• Tỉ lệ thức: a/b = c/d ⇔ a · d = b · c.
• Tính chất dãy tỉ số bằng nhau: a/b = c/d = (a + c)/(b + d) = (a - c)/(b - d).

### 2. Số thập phân vô hạn tuần hoàn & Căn bậc hai số học (Trang 19-21)
• Chuyển đổi: 0,(1) = 1/9; 0,(01) = 1/99; 0,(a) = a/9.
• Căn bậc hai số học của số a không âm là số x ≥ 0 sao cho x² = a (ký hiệu √a).`,
            quiz: [
              { question: "Số thập phân vô hạn tuần hoàn 0,(21) viết dưới dạng phân số tối giản là:", options: ["7/33", "21/100", "7/30", "21/90"], correctIndex: 0, explanation: "21/99 = 7/33." },
              { question: "Từ tỉ lệ thức x/4 = y/7 và x + y = 22, giá trị x và y là:", options: ["x = 8; y = 14", "x = 4; y = 18", "x = 14; y = 8", "x = 6; y = 16"], correctIndex: 0, explanation: "x/4 = y/7 = 22/11 = 2 => x = 8, y = 14." },
              { question: "Căn bậc hai số học của 64 là:", options: ["8", "-8", "±8", "16"], correctIndex: 0, explanation: "√64 = 8." },
              { question: "Làm tròn số 12,348 đến chữ số thập phân thứ nhất ta được:", options: ["12,3", "12,4", "12,35", "12"], correctIndex: 0, explanation: "Chữ số bỏ đi đầu tiên là 4 (< 5) nên được 12,3." },
              { question: "Kết quả của phép tính ((-1/2)²)³ bằng:", options: ["1/64", "-1/64", "1/32", "-1/32"], correctIndex: 0, explanation: "(1/4)³ = 1/64." },
              { question: "Tập hợp các số vô tỉ được ký hiệu là:", options: ["I", "Q", "R", "Z"], correctIndex: 0, explanation: "Tập số vô tỉ ký hiệu là I." },
              { question: "Phân số nào viết được dưới dạng số thập phân hữu hạn?", options: ["7/20", "5/12", "7/22", "1/7"], correctIndex: 0, explanation: "Mẫu 20 = 2²·5 chỉ chứa ước nguyên tố 2 và 5." },
              { question: "Giá trị của x trong |x - 1| = 5 là:", options: ["x = 6 hoặc x = -4", "Chỉ x = 6", "Chỉ x = -4", "x = 4 hoặc x = -6"], correctIndex: 0, explanation: "x - 1 = ±5 => x = 6 hoặc x = -4." },
              { question: "Cho a/b = c/d (a,b,c,d ≠ 0). Tỉ lệ thức nào sau đây SAI?", options: ["a/d = c/b", "a/c = b/d", "d/b = c/a", "d/c = b/a"], correctIndex: 0, explanation: "a/d = c/b có tích chéo ab = cd (sai)." },
              { question: "Số đối của số thực -√5 là:", options: ["√5", "-√5", "5", "1/√5"], correctIndex: 0, explanation: "Số đối của -√5 là √5." },
              { question: "Giá trị của biểu thức (-3)⁰ bằng:", options: ["1", "-3", "0", "-1"], correctIndex: 0, explanation: "x⁰ = 1 với x ≠ 0." },
              { question: "Kết quả phép tính 0,6 + 2/(-3) bằng:", options: ["-1/15", "1/15", "-1", "4/15"], correctIndex: 0, explanation: "3/5 - 2/3 = -1/15." }
            ],
            trueFalse: [
              { statement: "Mọi số hữu tỉ đều là số thực.", correct: true, explanation: "Đúng. R = Q ∪ I." },
              { statement: "Số 0 là số hữu tỉ dương.", correct: false, explanation: "Sai. Số 0 không âm cũng không dương." },
              { statement: "Nếu a · d = b · c (a,b,c,d ≠ 0) thì ta lập được 4 tỉ lệ thức.", correct: true, explanation: "Đúng." },
              { statement: "Số vô tỉ là số thập phân vô hạn tuần hoàn.", correct: false, explanation: "Sai. Số vô tỉ là thập phân vô hạn KHÔNG tuần hoàn." }
            ],
            shortAnswer: [
              { id: "sa-1", question: "Tìm x trong tỉ lệ thức: x / 15 = 8 / 20", correctAnswer: "6", rubric: "x = 15 · 8 / 20 = 6." },
              { id: "sa-2", question: "Tính giá trị biểu thức: |-15,5| + |4,5|", correctAnswer: "20", rubric: "15,5 + 4,5 = 20." },
              { id: "sa-3", question: "Tìm x biết: x - 1/2 = -2/3 (nhập dạng a/b tối giản):", correctAnswer: "-1/6", rubric: "x = -2/3 + 1/2 = -1/6." },
              { id: "sa-4", question: "Ba số a, b, c tỉ lệ với 2; 3; 5 và a + b + c = 100. Tìm c:", correctAnswer: "50", rubric: "c = (100 / 10) · 5 = 50." }
            ]
          },
          {
            id: "g7-ds-c2",
            title: "Chương II: Hàm số & Đồ thị (Tỉ lệ thuận, Tỉ lệ nghịch, Mặt phẳng tọa độ Oxy)",
            theory: `### 1. Đại lượng tỉ lệ thuận & Tỉ lệ nghịch (Trang 22)
• Tỉ lệ thuận: y = kx (k ≠ 0) ⇒ y₁/x₁ = y₂/x₂ = k.
• Tỉ lệ nghịch: y = a/x hay x · y = a (a ≠ 0) ⇒ x₁y₁ = x₂y₂ = a.

### 2. Đồ thị hàm số y = ax (a ≠ 0) (Trang 23)
• Đồ thị hàm số y = ax (a ≠ 0) là một đường thẳng đi qua gốc tọa độ O(0; 0).`,
            quiz: [
              { question: "Cho y tỉ lệ thuận với x theo hệ số k = -3. Khi x = 4 thì y bằng:", options: ["-12", "12", "-4/3", "-3/4"], correctIndex: 0, explanation: "y = -3 · 4 = -12." },
              { question: "Hai đại lượng x và y tỉ lệ nghịch, khi x = 4 thì y = 9. Hệ số tỉ lệ a bằng:", options: ["36", "9/4", "4/9", "13"], correctIndex: 0, explanation: "a = x · y = 36." },
              { question: "Điểm nào thuộc đồ thị hàm số y = -2x?", options: ["A(2; -4)", "B(1; 2)", "C(-2; -4)", "D(0; -2)"], correctIndex: 0, explanation: "y = -2 · 2 = -4." },
              { question: "Đồ thị hàm số y = ax (a ≠ 0) luôn đi qua điểm nào?", options: ["Gốc tọa độ O(0; 0)", "Điểm (0; 1)", "Điểm (1; 0)", "Điểm (-1; 1)"], correctIndex: 0, explanation: "Luôn đi qua gốc O(0; 0)." },
              { question: "Cho hàm số f(x) = 2x² - 3. Giá trị của f(-2) bằng:", options: ["5", "-11", "1", "7"], correctIndex: 0, explanation: "2 · 4 - 3 = 5." },
              { question: "Trục nằm ngang trong hệ trục tọa độ Oxy gọi là:", options: ["Trục hoành (Ox)", "Trục tung (Oy)", "Trục đối xứng", "Đường chéo"], correctIndex: 0, explanation: "Ox là trục hoành." },
              { question: "Điểm M(-3; 5) có hoành độ và tung độ lần lượt là:", options: ["Hoành độ -3; tung độ 5", "Hoành độ 5; tung độ -3", "Hoành độ 3; tung độ -5", "Hoành độ 0; tung độ 5"], correctIndex: 0, explanation: "Hoành độ trước, tung độ sau." },
              { question: "Nếu y tỉ lệ thuận với x theo hệ số k thì x tỉ lệ thuận với y theo hệ số:", options: ["1/k", "k", "-k", "k²"], correctIndex: 0, explanation: "Hệ số 1/k." },
              { question: "Cho x và y tỉ lệ nghịch. Khi x tăng 3 lần thì y:", options: ["Giảm đi 3 lần", "Tăng lên 3 lần", "Không đổi", "Tăng 9 lần"], correctIndex: 0, explanation: "Tỉ lệ nghịch nên giảm 3 lần." },
              { question: "Điểm thuộc trục hoành thì có tung độ bằng:", options: ["0", "1", "Bất kỳ", "-1"], correctIndex: 0, explanation: "Tung độ bằng 0." },
              { question: "Điểm thuộc trục tung thì có hoành độ bằng:", options: ["0", "1", "-1", "Vô cùng"], correctIndex: 0, explanation: "Hoành độ bằng 0." },
              { question: "Đồ thị hàm số y = 3x đi qua điểm A(1; m). Giá trị của m là:", options: ["3", "1", "1/3", "-3"], correctIndex: 0, explanation: "m = 3 · 1 = 3." }
            ],
            trueFalse: [
              { statement: "Tỉ số hai giá trị tương ứng của hai đại lượng tỉ lệ thuận luôn không đổi.", correct: true, explanation: "Đúng." },
              { statement: "Tích hai giá trị tương ứng của hai đại lượng tỉ lệ nghịch luôn là một hằng số.", correct: true, explanation: "Đúng." },
              { statement: "Đồ thị của hàm số y = 2x là một đường cong Parabol.", correct: false, explanation: "Sai. Là một đường thẳng." },
              { statement: "Điểm P(0; 4) nằm trên trục hoành Ox.", correct: false, explanation: "Sai. Nằm trên trục tung Oy." }
            ],
            shortAnswer: [
              { id: "sa-1", question: "y tỉ lệ nghịch với x. Khi x = 6 thì y = 5. Tìm y khi x = 10:", correctAnswer: "3", rubric: "a = 30 => y = 30 / 10 = 3." },
              { id: "sa-2", question: "Cho hàm số y = f(x) = 5 - 3x. Tìm x để f(x) = -7:", correctAnswer: "4", rubric: "3x = 12 => x = 4." },
              { id: "sa-3", question: "12 công nhân làm xong việc trong 8 ngày. 16 công nhân làm xong trong mấy ngày?", correctAnswer: "6", rubric: "12 · 8 / 16 = 6 ngày." },
              { id: "sa-4", question: "Đường thẳng y = ax đi qua điểm M(-2; 6). Tìm hệ số a:", correctAnswer: "-3", rubric: "a = 6 / (-2) = -3." }
            ]
          },
          {
            id: "g7-ds-c3",
            title: "Chương III & IV: Thống kê & Biểu thức đại số (Đơn thức, Đa thức, Nghiệm)",
            theory: `### 1. Thống kê: Tần số, Trung bình cộng & Mốt M₀ (Trang 24-25)
• Số trung bình cộng: X̄ = (x₁n₁ + x₂n₂ + ... + xₖnₖ) / N. Mốt (M₀) là giá trị có tần số lớn nhất.

### 2. Đơn thức, Đa thức & Nghiệm của đa thức (Trang 26-28)
• Bậc của đơn thức là tổng số mũ của các biến.
• x = a là nghiệm của đa thức P(x) khi P(a) = 0.`,
            quiz: [
              { question: "Bậc của đơn thức thu gọn -5x³y²z là:", options: ["Bậc 6", "Bậc 5", "Bậc 3", "Bậc -5"], correctIndex: 0, explanation: "3 + 2 + 1 = 6." },
              { question: "Đơn thức nào đồng dạng với 3x²y³?", options: ["-7x²y³", "3x³y²", "3(xy)⁵", "0x²y³"], correctIndex: 0, explanation: "Cùng phần biến x²y³." },
              { question: "Nghiệm của đa thức P(x) = 2x - 8 là:", options: ["x = 4", "x = -4", "x = 8", "x = 1/4"], correctIndex: 0, explanation: "2x - 8 = 0 => x = 4." },
              { question: "Mốt của dấu hiệu (M₀) là:", options: ["Giá trị có tần số lớn nhất", "Giá trị lớn nhất", "Tần số lớn nhất", "Số trung bình cộng"], correctIndex: 0, explanation: "Giá trị có tần số lớn nhất." },
              { question: "Đa thức f(x) = x² - 5x + 4 có nghiệm là:", options: ["x = 1 và x = 4", "x = -1 và x = -4", "x = 1 và x = -4", "x = 2 và x = 3"], correctIndex: 0, explanation: "a + b + c = 0 nên nghiệm là 1 và 4." },
              { question: "Tích của hai đơn thức 2x²y và -3xy³ là:", options: ["-6x³y⁴", "6x³y⁴", "-6x²y³", "-5x³y⁴"], correctIndex: 0, explanation: "-6x³y⁴." },
              { question: "Hệ số cao nhất của P(x) = -4x³ + 7x² - 2x + 9 là:", options: ["-4", "7", "9", "3"], correctIndex: 0, explanation: "Hệ số của x³ là -4." },
              { question: "Hệ số tự do của đa thức P(x) = -4x³ + 7x² - 2x + 9 là:", options: ["9", "-4", "7", "-2"], correctIndex: 0, explanation: "Hạng tử không chứa biến là 9." },
              { question: "Giá trị của A = 2x - 3y tại x = 2, y = -1 là:", options: ["7", "1", "-7", "4"], correctIndex: 0, explanation: "4 + 3 = 7." },
              { question: "Số nghiệm của đa thức bậc 3 không vượt quá:", options: ["3 nghiệm", "2 nghiệm", "1 nghiệm", "Vô số"], correctIndex: 0, explanation: "Tối đa 3 nghiệm." },
              { question: "Đa thức nào sau đây không có nghiệm thực?", options: ["x² + 1", "x² - 1", "x + 5", "2x"], correctIndex: 0, explanation: "x² + 1 ≥ 1 > 0 với mọi x." },
              { question: "Thu gọn 5x²y - 3x²y + x²y được:", options: ["3x²y", "2x²y", "4x²y", "6x²y"], correctIndex: 0, explanation: "(5 - 3 + 1)x²y = 3x²y." }
            ],
            trueFalse: [
              { statement: "Số 0 được coi là đơn thức không có bậc.", correct: true, explanation: "Đúng." },
              { statement: "Đa thức x² - 4 có đúng hai nghiệm là x = 2 và x = -2.", correct: true, explanation: "Đúng." },
              { statement: "Hai đơn thức 2x và 2y là hai đơn thức đồng dạng.", correct: false, explanation: "Sai. Khác phần biến." },
              { statement: "Mốt của dấu hiệu là tần số lớn nhất trong bảng tần số.", correct: false, explanation: "Sai. Mốt là GIÁ TRỊ có tần số lớn nhất." }
            ],
            shortAnswer: [
              { id: "sa-1", question: "Tính giá trị của P(x) = x³ - 3x + 1 tại x = -2:", correctAnswer: "-1", rubric: "-8 + 6 + 1 = -1." },
              { id: "sa-2", question: "Tìm nghiệm của đa thức: Q(x) = 5x - 35", correctAnswer: "7", rubric: "5x = 35 => x = 7." },
              { id: "sa-3", question: "Tìm bậc của đa thức: M = 4x⁵y - 2x³y⁴ + 7", correctAnswer: "7", rubric: "Hạng tử -2x³y⁴ có bậc 3 + 4 = 7." },
              { id: "sa-4", question: "Cho P(x) = ax + 6. Biết P(2) = 0, tìm a:", correctAnswer: "-3", rubric: "2a + 6 = 0 => a = -3." }
            ]
          }
        ]
      },
      {
        id: "g7-hh",
        title: "B. Hình học 7 (Toàn bộ 3 Chương)",
        lessons: [
          {
            id: "g7-hh-c1",
            title: "Chương I, II & III: Đường thẳng song song, Tam giác, Pytago & 4 Đường đồng quy",
            theory: `### 1. Tiên đề Ơ-clit & Tổng ba góc của tam giác (Trang 29-34)
• Hai góc đối đỉnh thì bằng nhau. Tiên đề Ơ-clit: Qua một điểm ngoài đường thẳng chỉ có duy nhất một đường thẳng song song với nó.
• Tổng 3 góc trong một tam giác bằng 180°. Định lý Pytago trong tam giác vuông: BC² = AB² + AC².

### 2. Bất đẳng thức tam giác & Bốn đường đồng quy (Trang 35-38)
• Bất đẳng thức tam giác: |AB - AC| < BC < AB + AC.
• Trọng tâm G (giao 3 đường trung tuyến): AG = (2/3)AM.
• Giao 3 đường phân giác cách đều 3 cạnh; Giao 3 đường trung trực cách đều 3 đỉnh; Giao 3 đường cao là Trực tâm H.`,
            quiz: [
              { question: "Tổng ba góc trong một tam giác bằng:", options: ["180°", "90°", "360°", "120°"], correctIndex: 0, explanation: "Tổng 3 góc tam giác bằng 180°." },
              { question: "Cho tam giác ABC vuông tại A có AB = 6cm, AC = 8cm. Cạnh huyền BC bằng:", options: ["10cm", "14cm", "100cm", "48cm"], correctIndex: 0, explanation: "√(6² + 8²) = 10cm." },
              { question: "Trọng tâm của tam giác là giao điểm của:", options: ["Ba đường trung tuyến", "Ba đường phân giác", "Ba đường trung trực", "Ba đường cao"], correctIndex: 0, explanation: "Giao 3 trung tuyến là trọng tâm." },
              { question: "Cho G là trọng tâm tam giác ABC, AM là trung tuyến. Tỉ số AG/AM bằng:", options: ["2/3", "1/2", "1/3", "3/4"], correctIndex: 0, explanation: "AG/AM = 2/3." },
              { question: "Điểm cách đều ba cạnh của tam giác là giao điểm của:", options: ["Ba đường phân giác", "Ba đường trung trực", "Ba đường cao", "Ba đường trung tuyến"], correctIndex: 0, explanation: "Giao 3 phân giác cách đều 3 cạnh." },
              { question: "Điểm cách đều ba đỉnh của tam giác là giao điểm của:", options: ["Ba đường trung trực", "Ba đường phân giác", "Ba đường cao", "Ba đường trung tuyến"], correctIndex: 0, explanation: "Giao 3 trung trực cách đều 3 đỉnh." },
              { question: "Bộ ba đoạn thẳng nào tạo thành một tam giác?", options: ["3cm, 4cm, 6cm", "2cm, 3cm, 5cm", "1cm, 2cm, 4cm", "4cm, 5cm, 10cm"], correctIndex: 0, explanation: "3 + 4 > 6." },
              { question: "Tam giác cân có một góc bằng 60° là:", options: ["Tam giác đều", "Tam giác vuông", "Tam giác tù", "Tam giác thường"], correctIndex: 0, explanation: "Tam giác cân có 1 góc 60° là tam giác đều." },
              { question: "Trực tâm của tam giác là giao điểm của:", options: ["Ba đường cao", "Ba đường trung tuyến", "Ba đường phân giác", "Ba đường trung trực"], correctIndex: 0, explanation: "Giao 3 đường cao." },
              { question: "Hai góc đối đỉnh thì:", options: ["Bằng nhau", "Phụ nhau", "Bù nhau", "Gấp đôi nhau"], correctIndex: 0, explanation: "Hai góc đối đỉnh bằng nhau." },
              { question: "Mỗi góc ngoài của tam giác bằng:", options: ["Tổng hai góc trong không kề với nó", "Góc kề với nó", "180°", "90°"], correctIndex: 0, explanation: "Bằng tổng 2 góc trong không kề." },
              { question: "Trong tam giác vuông, tâm đường tròn ngoại tiếp nằm ở:", options: ["Trung điểm cạnh huyền", "Đỉnh góc vuông", "Trọng tâm", "Trực tâm"], correctIndex: 0, explanation: "Trung điểm cạnh huyền." }
            ],
            trueFalse: [
              { statement: "Trong một tam giác, góc đối diện với cạnh lớn hơn là góc lớn hơn.", correct: true, explanation: "Đúng." },
              { statement: "Trọng tâm tam giác luôn nằm bên trong tam giác.", correct: true, explanation: "Đúng." },
              { statement: "Có thể vẽ được tam giác có độ dài 3 cạnh là 2cm, 3cm, 5cm.", correct: false, explanation: "Sai. Vì 2 + 3 = 5 không thỏa BĐT tam giác." },
              { statement: "Trong tam giác đều, trọng tâm, trực tâm và tâm đường tròn nội/ngoại tiếp trùng nhau.", correct: true, explanation: "Đúng." }
            ],
            shortAnswer: [
              { id: "sa-1", question: "G là trọng tâm tam giác ABC, trung tuyến AM = 12cm. Tính AG (cm):", correctAnswer: "8", rubric: "AG = (2/3) · 12 = 8cm." },
              { id: "sa-2", question: "Tính cạnh huyền tam giác vuông có hai cạnh góc vuông là 5cm và 12cm:", correctAnswer: "13", rubric: "√(5² + 12²) = 13cm." },
              { id: "sa-3", question: "Tam giác ABC cân tại A có góc ở đáy ∠B = 65°. Tính góc ở đỉnh ∠A (độ):", correctAnswer: "50", rubric: "180° - 2 · 65° = 50°." },
              { id: "sa-4", question: "Tam giác có hai cạnh dài 3cm và 7cm. Tìm độ dài nguyên lớn nhất của cạnh thứ ba (cm):", correctAnswer: "9", rubric: "4 < c < 10 => lớn nhất là 9cm." }
            ]
          }
        ]
      }
    ]
  },
  grade8: {
    id: "grade8",
    name: "Khối Lớp 8",
    courses: [
      {
        id: "g8-ds",
        title: "A. Đại số 8 (Toàn bộ 4 Chương)",
        lessons: [
          {
            id: "g8-ds-c1",
            title: "Chương I & II: 7 Hằng đẳng thức đáng nhớ, Phân tích đa thức & Phân thức đại số",
            theory: `### 1. Bảy hằng đẳng thức đáng nhớ (Trang 40-41)
1. (A + B)² = A² + 2AB + B²
2. (A - B)² = A² - 2AB + B²
3. A² - B² = (A - B)(A + B)
4. (A + B)³ = A³ + 3A²B + 3AB² + B³
5. (A - B)³ = A³ - 3A²B + 3AB² - B³
6. A³ + B³ = (A + B)(A² - AB + B²)
7. A³ - B³ = (A - B)(A² + AB + B²)

### 2. Phân thức đại số (Trang 46-48)
• Phân thức A/B xác định khi mẫu thức B ≠ 0. Hai phân thức bằng nhau: A/B = C/D ⇔ A · D = B · C.`,
            quiz: [
              { question: "Khai triển (2x - 3)² ta được:", options: ["4x² - 12x + 9", "4x² - 6x + 9", "2x² - 12x + 9", "4x² + 12x + 9"], correctIndex: 0, explanation: "(2x)² - 2·2x·3 + 3² = 4x² - 12x + 9." },
              { question: "Phân tích x² - 5x + 6 thành nhân tử:", options: ["(x - 2)(x - 3)", "(x + 2)(x + 3)", "(x - 1)(x - 6)", "(x + 1)(x - 6)"], correctIndex: 0, explanation: "(x - 2)(x - 3)." },
              { question: "Biểu thức x³ + 8 viết dưới dạng tích là:", options: ["(x + 2)(x² - 2x + 4)", "(x + 2)(x² + 2x + 4)", "(x - 2)(x² + 2x + 4)", "(x + 2)³"], correctIndex: 0, explanation: "x³ + 2³ = (x + 2)(x² - 2x + 4)." },
              { question: "Giá trị của A = x² + 4x + 4 tại x = 98 là:", options: ["10000", "1000", "9604", "100"], correctIndex: 0, explanation: "(98 + 2)² = 100² = 10000." },
              { question: "Điều kiện xác định của phân thức (x + 5) / (x² - 9) là:", options: ["x ≠ 3 và x ≠ -3", "x ≠ 3", "x ≠ 9", "x ≠ -5"], correctIndex: 0, explanation: "x² - 9 ≠ 0 <=> x ≠ ±3." },
              { question: "Rút gọn phân thức (x² - 4) / (x + 2) (với x ≠ -2) được:", options: ["x - 2", "x + 2", "x - 4", "2"], correctIndex: 0, explanation: "(x - 2)(x + 2)/(x + 2) = x - 2." },
              { question: "Kết quả phép tính (x - y)(x + y) bằng:", options: ["x² - y²", "x² + y²", "(x - y)²", "x² - 2xy + y²"], correctIndex: 0, explanation: "Hiệu hai bình phương." },
              { question: "Tìm x biết x² - 16 = 0:", options: ["x = 4 hoặc x = -4", "Chỉ x = 4", "Chỉ x = -4", "x = 16"], correctIndex: 0, explanation: "x = ±4." },
              { question: "Giá trị nhỏ nhất của biểu thức P = x² - 6x + 14 là:", options: ["5", "14", "9", "3"], correctIndex: 0, explanation: "(x - 3)² + 5 ≥ 5." },
              { question: "Số dư của phép chia đa thức f(x) cho nhị thức (x - a) bằng:", options: ["f(a)", "f(-a)", "0", "a"], correctIndex: 0, explanation: "Định lý Bezout: R = f(a)." },
              { question: "Mẫu thức chung đơn giản nhất của 1/(2x) và 1/(3x²) là:", options: ["6x²", "6x³", "5x²", "2x"], correctIndex: 0, explanation: "6x²." },
              { question: "Quy tắc đổi dấu phân thức nào sau đây đúng?", options: ["A/B = -A / -B", "A/B = -A / B", "A/B = A / -B", "A/B = -B / -A"], correctIndex: 0, explanation: "A/B = -A / -B." }
            ],
            trueFalse: [
              { statement: "Đẳng thức (A - B)² = (B - A)² luôn đúng với mọi A, B.", correct: true, explanation: "Đúng." },
              { statement: "Đa thức x² + 4 có thể phân tích thành nhân tử trên tập số thực.", correct: false, explanation: "Sai. x² + 4 > 0 với mọi x ∈ R." },
              { statement: "Mỗi đa thức đều được coi là một phân thức đại số có mẫu bằng 1.", correct: true, explanation: "Đúng." },
              { statement: "a³ + b³ = (a + b)³.", correct: false, explanation: "Sai." }
            ],
            shortAnswer: [
              { id: "sa-1", question: "Tính nhanh giá trị: 105² - 5²", correctAnswer: "11000", rubric: "100 · 110 = 11000." },
              { id: "sa-2", question: "Tìm nghiệm lớn hơn của phương trình: x² - 8x + 15 = 0", correctAnswer: "5", rubric: "(x - 3)(x - 5) = 0 => nghiệm lớn là 5." },
              { id: "sa-3", question: "Tìm số dư khi chia f(x) = x³ - 2x + 5 cho (x - 2):", correctAnswer: "9", rubric: "f(2) = 8 - 4 + 5 = 9." },
              { id: "sa-4", question: "Tìm x để phân thức (x - 3) / (x + 5) bằng 0:", correctAnswer: "3", rubric: "x - 3 = 0 => x = 3." }
            ]
          },
          {
            id: "g8-ds-c3",
            title: "Chương III & IV: Phương trình bậc nhất, Bất phương trình & BĐT Cô-si, Bunhiacopxki",
            theory: `### 1. Phương trình bậc nhất, Phương trình tích & Ẩn ở mẫu (Trang 49-53)
• ax + b = 0 (a ≠ 0) ⇔ x = -b/a. Phương trình tích: A(x)·B(x) = 0 ⇔ A(x) = 0 hoặc B(x) = 0.
• Giải PT chứa ẩn ở mẫu: Bắt buộc tìm ĐKXĐ trước và đối chiếu nghiệm.

### 2. Bất phương trình & Bất đẳng thức Cô-si (Trang 54-59)
• Khi nhân/chia hai vế bất phương trình với số ÂM, bắt buộc ĐỔI CHIỀU bất phương trình.
• BĐT Cô-si cho 2 số không âm: a + b ≥ 2√(ab). Hệ quả: a + 1/a ≥ 2 (với a > 0).`,
            quiz: [
              { question: "Tập nghiệm của phương trình tích (x - 3)(2x + 4) = 0 là:", options: ["S = {3; -2}", "S = {-3; 2}", "S = {3; 2}", "S = {3; -4}"], correctIndex: 0, explanation: "x = 3 hoặc x = -2." },
              { question: "Giải bất phương trình -3x + 12 > 0 ta được:", options: ["x < 4", "x > 4", "x < -4", "x > -4"], correctIndex: 0, explanation: "Chia cho -3 đổi chiều: x < 4." },
              { question: "Bất đẳng thức Cô-si cho 2 số không âm a, b khẳng định:", options: ["a + b ≥ 2√(ab)", "a + b ≤ 2√(ab)", "a + b ≥ √(ab)", "a² + b² ≥ ab"], correctIndex: 0, explanation: "a + b ≥ 2√(ab)." },
              { question: "Với a > 0, giá trị nhỏ nhất của biểu thức a + 1/a là:", options: ["2", "1", "4", "0"], correctIndex: 0, explanation: "a + 1/a ≥ 2." },
              { question: "Khi giải phương trình chứa ẩn ở mẫu, bước đầu tiên bắt buộc là:", options: ["Tìm điều kiện xác định (ĐKXĐ)", "Khử mẫu ngay", "Chuyển vế", "Bình phương hai vế"], correctIndex: 0, explanation: "Tìm ĐKXĐ." },
              { question: "Tập nghiệm của phương trình |x - 2| = 5 là:", options: ["{7; -3}", "{-7; 3}", "{7; 3}", "{5; -5}"], correctIndex: 0, explanation: "x = 7 hoặc x = -3." },
              { question: "Phương trình 0x = 5 có tập nghiệm là:", options: ["S = ∅ (vô nghiệm)", "S = R", "x = 0", "x = 5"], correctIndex: 0, explanation: "Vô nghiệm." },
              { question: "Khi nhân hai vế bất đẳng thức với một số âm, ta phải:", options: ["Đổi chiều bất đẳng thức", "Giữ nguyên chiều", "Bình phương", "Lấy căn"], correctIndex: 0, explanation: "Đổi chiều BĐT." },
              { question: "Cho x, y > 0 và x + y = 10. Giá trị lớn nhất của tích x · y là:", options: ["25", "20", "50", "100"], correctIndex: 0, explanation: "xy ≤ (10/2)² = 25." },
              { question: "Bất đẳng thức Bunhiacopxki cho 4 số thực khẳng định:", options: ["(a² + b²)(x² + y²) ≥ (ax + by)²", "(a + b)(x + y) ≥ ax + by", "a² + b² ≥ 2ab", "ax + by ≥ 0"], correctIndex: 0, explanation: "(a² + b²)(x² + y²) ≥ (ax + by)²." },
              { question: "Nghiệm nguyên lớn nhất của bất phương trình x < 4,5 là:", options: ["4", "5", "3", "0"], correctIndex: 0, explanation: "4." },
              { question: "Hai phương trình được gọi là tương đương khi:", options: ["Có cùng tập nghiệm", "Có cùng bậc", "Có cùng hệ số", "Đều có nghiệm"], correctIndex: 0, explanation: "Cùng tập nghiệm." }
            ],
            trueFalse: [
              { statement: "Phương trình bậc nhất một ẩn ax + b = 0 (a ≠ 0) luôn có nghiệm duy nhất.", correct: true, explanation: "Đúng." },
              { statement: "Nhân hai vế bất đẳng thức với số khác 0 thì chiều không bao giờ đổi.", correct: false, explanation: "Sai. Nhân số âm phải đổi chiều." },
              { statement: "Bất đẳng thức a² + b² ≥ 2ab luôn đúng với mọi số thực a, b.", correct: true, explanation: "Đúng vì (a - b)² ≥ 0." },
              { statement: "Phương trình |x| = -3 có hai nghiệm là 3 và -3.", correct: false, explanation: "Sai. Vô nghiệm." }
            ],
            shortAnswer: [
              { id: "sa-1", question: "Giải phương trình: 5(x - 2) = 3x + 4. Tìm x:", correctAnswer: "7", rubric: "2x = 14 => x = 7." },
              { id: "sa-2", question: "Tìm nghiệm phương trình: (x + 2)/(x - 2) = 3", correctAnswer: "4", rubric: "x + 2 = 3x - 6 => x = 4." },
              { id: "sa-3", question: "Cho x > 0. Tìm giá trị nhỏ nhất của A = x + 16/x:", correctAnswer: "8", rubric: "A ≥ 2√16 = 8." },
              { id: "sa-4", question: "Tìm số nguyên x nhỏ nhất thỏa mãn: 3x - 5 > 7", correctAnswer: "5", rubric: "x > 4 => x nguyên nhỏ nhất là 5." }
            ]
          }
        ]
      },
      {
        id: "g8-hh",
        title: "B. Hình học 8 (Toàn bộ 4 Chương)",
        lessons: [
          {
            id: "g8-hh-c1",
            title: "Chương I, II, III & IV: Tứ giác, Diện tích đa giác, Định lý Ta-lét, Đồng dạng & Lăng trụ",
            theory: `### 1. Tứ giác, Đường trung bình & Diện tích (Trang 61-69)
• Tổng 4 góc tứ giác = 360°. Đường trung bình tam giác: DE = BC/2; Hình thang: EF = (AB + CD)/2.
• Trong tam giác vuông, trung tuyến ứng với cạnh huyền bằng nửa cạnh huyền.

### 2. Định lý Ta-lét, Tính chất phân giác & Tam giác đồng dạng (Trang 70-78)
• Định lý Ta-lét: B'C' // BC ⇒ AB'/AB = AC'/AC = B'C'/BC.
• Phân giác AD: DB/DC = AB/AC.
• Tam giác đồng dạng theo tỉ số k: Tỉ số đường cao = k; Tỉ số diện tích S'/S = k².
• Thể tích lăng trụ đứng: V = S · h; Hình chóp đều: V = (1/3) · S · h.`,
            quiz: [
              { question: "Tổng số đo các góc của một tứ giác lồi bằng:", options: ["360°", "180°", "90°", "540°"], correctIndex: 0, explanation: "360°." },
              { question: "Hình thang có hai đáy 6cm và 10cm thì đường trung bình bằng:", options: ["8cm", "16cm", "4cm", "12cm"], correctIndex: 0, explanation: "(6 + 10)/2 = 8cm." },
              { question: "Nếu ΔABC ∽ ΔDEF theo tỉ số k = 3 thì tỉ số diện tích S(ABC)/S(DEF) bằng:", options: ["9", "3", "6", "1/9"], correctIndex: 0, explanation: "k² = 9." },
              { question: "Cho ΔABC có AB = 6cm, AC = 9cm. Phân giác AD cắt BC tại D. Tỉ số DB/DC bằng:", options: ["2/3", "3/2", "1/3", "4/9"], correctIndex: 0, explanation: "DB/DC = AB/AC = 6/9 = 2/3." },
              { question: "Hình thoi có hai đường chéo 6cm và 8cm. Diện tích hình thoi là:", options: ["24cm²", "48cm²", "14cm²", "12cm²"], correctIndex: 0, explanation: "(1/2)·6·8 = 24cm²." },
              { question: "Trong tam giác vuông có cạnh huyền 10cm, trung tuyến ứng với cạnh huyền bằng:", options: ["5cm", "10cm", "2,5cm", "20cm"], correctIndex: 0, explanation: "10 / 2 = 5cm." },
              { question: "Tổng các góc của đa giác lồi n cạnh là:", options: ["(n - 2) · 180°", "n · 180°", "(n - 3) · 180°", "(n + 2) · 180°"], correctIndex: 0, explanation: "(n - 2) · 180°." },
              { question: "Thể tích hình chóp đều có diện tích đáy S và chiều cao h là:", options: ["(1/3) · S · h", "S · h", "(1/2) · S · h", "3 · S · h"], correctIndex: 0, explanation: "V = (1/3)Sh." },
              { question: "Số đường chéo của một lục giác (6 cạnh) là:", options: ["9", "6", "12", "15"], correctIndex: 0, explanation: "6(6 - 3)/2 = 9." },
              { question: "Hình bình hành có hai đường chéo vuông góc là:", options: ["Hình thoi", "Hình chữ nhật", "Hình thang cân", "Hình vuông"], correctIndex: 0, explanation: "Hình thoi." },
              { question: "Hình chữ nhật có hai đường chéo vuông góc là:", options: ["Hình vuông", "Hình thoi", "Hình thang", "Hình bình hành"], correctIndex: 0, explanation: "Hình vuông." },
              { question: "Thể tích hình lập phương cạnh a = 4cm bằng:", options: ["64cm³", "16cm³", "48cm³", "96cm³"], correctIndex: 0, explanation: "4³ = 64cm³." }
            ],
            trueFalse: [
              { statement: "Đường trung bình của tam giác song song với cạnh thứ ba và bằng nửa cạnh ấy.", correct: true, explanation: "Đúng." },
              { statement: "Tỉ số diện tích của hai tam giác đồng dạng bằng bình phương tỉ số đồng dạng.", correct: true, explanation: "Đúng." },
              { statement: "Thể tích của hình chóp đều bằng diện tích đáy nhân với chiều cao.", correct: false, explanation: "Sai. Phải nhân với 1/3." },
              { statement: "Mọi hình thoi đều là hình vuông.", correct: false, explanation: "Sai." }
            ],
            shortAnswer: [
              { id: "sa-1", question: "Cho ΔABC có BC = 14cm. Đường trung bình ứng với BC dài bao nhiêu cm?", correctAnswer: "7", rubric: "14 / 2 = 7cm." },
              { id: "sa-2", question: "Tính thể tích hình chóp đều có S đáy = 30cm² và chiều cao h = 7cm (cm³):", correctAnswer: "70", rubric: "(1/3) · 30 · 7 = 70cm³." },
              { id: "sa-3", question: "Một ngũ giác lồi có 5 cạnh. Tính số đường chéo của ngũ giác đó:", correctAnswer: "5", rubric: "5(5 - 3)/2 = 5." },
              { id: "sa-4", question: "ΔABC có AB = 5cm, AC = 10cm, phân giác AD chia BC = 9cm thành BD và CD. Tính BD (cm):", correctAnswer: "3", rubric: "BD/CD = 1/2 => BD = 3cm." }
            ]
          }
        ]
      }
    ]
  },
  grade9: {
    id: "grade9",
    name: "Khối Lớp 9",
    courses: [
      {
        id: "g9-ds",
        title: "A. Đại số 9 (Toàn bộ 4 Chương Ôn thi vào 10)",
        lessons: [
          {
            id: "g9-ds-c1",
            title: "Chương I & II: Căn bậc hai, Căn bậc ba & Hàm số bậc nhất y = ax + b",
            theory: `### 1. Căn bậc hai & Biến đổi căn thức (Trang 79-83)
• √A xác định khi A ≥ 0. Hằng đẳng thức: √(A²) = |A|.
• Trục căn thức ở mẫu: m / (√A ± √B) = m(√A ∓ √B) / (A - B).
• Mọi số thực đều có duy nhất một căn bậc ba ∛a.

### 2. Hàm số bậc nhất y = ax + b (a ≠ 0) (Trang 84-86)
• Đồng biến trên R khi a > 0; Nghịch biến trên R khi a < 0.
• Vị trí tương đối của (d): y = ax + b và (d'): y = a'x + b':
  - Cắt nhau ⇔ a ≠ a' | Song song ⇔ a = a' và b ≠ b' | Vuông góc ⇔ a · a' = -1.`,
            quiz: [
              { question: "Điều kiện xác định của √(3x - 6) là:", options: ["x ≥ 2", "x > 2", "x ≤ 2", "x ≥ -2"], correctIndex: 0, explanation: "3x - 6 ≥ 0 <=> x ≥ 2." },
              { question: "Giá trị của biểu thức √((√3 - 2)²) bằng:", options: ["2 - √3", "√3 - 2", "3 - 2", "√3 + 2"], correctIndex: 0, explanation: "|√3 - 2| = 2 - √3." },
              { question: "Trục căn thức ở mẫu của 2 / (√5 - √3) ta được:", options: ["√5 + √3", "√5 - √3", "2(√5 + √3)", "(√5 + √3)/2"], correctIndex: 0, explanation: "2(√5 + √3)/(5 - 3) = √5 + √3." },
              { question: "Căn bậc ba của -64 bằng:", options: ["-4", "4", "±4", "Không tồn tại"], correctIndex: 0, explanation: "∛(-64) = -4." },
              { question: "Hàm số y = (m - 3)x + 5 đồng biến trên R khi:", options: ["m > 3", "m < 3", "m ≠ 3", "m ≥ 3"], correctIndex: 0, explanation: "m - 3 > 0 <=> m > 3." },
              { question: "Hai đường thẳng y = 2x + 3 và y = (k - 1)x - 2 song song khi:", options: ["k = 3", "k = 2", "k = -1", "k = 1"], correctIndex: 0, explanation: "k - 1 = 2 => k = 3." },
              { question: "Đường thẳng nào vuông góc với y = 0,5x + 1?", options: ["y = -2x + 3", "y = 2x + 3", "y = -0,5x - 1", "y = 0,5x - 4"], correctIndex: 0, explanation: "0,5 · (-2) = -1." },
              { question: "Rút gọn √(8) - √(18) + √(50) ta được:", options: ["4√2", "2√2", "6√2", "0"], correctIndex: 0, explanation: "2√2 - 3√2 + 5√2 = 4√2." },
              { question: "Góc tạo bởi đường thẳng y = x + 2 và trục Ox bằng:", options: ["45°", "60°", "30°", "135°"], correctIndex: 0, explanation: "tan α = 1 => α = 45°." },
              { question: "Giao điểm của y = 2x - 6 với trục hoành Ox là:", options: ["(3; 0)", "(0; -6)", "(-3; 0)", "(0; 3)"], correctIndex: 0, explanation: "y = 0 => x = 3." },
              { question: "Biểu thức 1 / √(x - 3) xác định khi:", options: ["x > 3", "x ≥ 3", "x < 3", "x ≠ 3"], correctIndex: 0, explanation: "x - 3 > 0 => x > 3." },
              { question: "Tung độ gốc của đường thẳng y = 4x - 9 là:", options: ["-9", "4", "9/4", "9"], correctIndex: 0, explanation: "b = -9." }
            ],
            trueFalse: [
              { statement: "Mọi số thực đều có căn bậc ba duy nhất.", correct: true, explanation: "Đúng." },
              { statement: "Hai đường thẳng có tích hệ số góc bằng -1 thì vuông góc với nhau.", correct: true, explanation: "Đúng." },
              { statement: "√(x²) = x với mọi số thực x.", correct: false, explanation: "Sai. √(x²) = |x|." },
              { statement: "Đồ thị hàm số y = ax + b luôn đi qua gốc tọa độ O.", correct: false, explanation: "Sai. Chỉ đi qua O khi b = 0." }
            ],
            shortAnswer: [
              { id: "sa-1", question: "Tính giá trị biểu thức: P = √(48) / √(3)", correctAnswer: "4", rubric: "√16 = 4." },
              { id: "sa-2", question: "Giải phương trình: √(2x - 1) = 5. Tìm x:", correctAnswer: "13", rubric: "2x - 1 = 25 => x = 13." },
              { id: "sa-3", question: "Tìm tung độ giao điểm của hai đường thẳng y = 3x - 1 và y = x + 3:", correctAnswer: "5", rubric: "3x - 1 = x + 3 => x = 2 => y = 5." },
              { id: "sa-4", question: "Tính giá trị của: ∛(27) - ∛(-125)", correctAnswer: "8", rubric: "3 - (-5) = 8." }
            ]
          },
          {
            id: "g9-ds-c3",
            title: "Chương III & IV: Hệ phương trình, Parabol y = ax² & PT bậc hai - Định lý Vi-ét",
            theory: `### 1. Hệ hai phương trình bậc nhất hai ẩn (Trang 89-92)
• Có nghiệm duy nhất ⇔ a/a' ≠ b/b'; Vô nghiệm ⇔ a/a' = b/b' ≠ c/c'; Vô số nghiệm ⇔ a/a' = b/b' = c/c'.

### 2. Phương trình bậc hai ax² + bx + c = 0 & Hệ thức Vi-ét (Trang 93-97)
• Biệt thức Δ = b² - 4ac (hoặc Δ' = b'² - ac).
• Định lý Vi-ét: S = x₁ + x₂ = -b/a và P = x₁ · x₂ = c/a.
• Biến đổi thường gặp: x₁² + x₂² = S² - 2P; x₁³ + x₂³ = S³ - 3PS.
• Nhẩm nghiệm: a + b + c = 0 ⇒ x₁ = 1, x₂ = c/a; a - b + c = 0 ⇒ x₁ = -1, x₂ = -c/a.`,
            quiz: [
              { question: "Nghiệm của hệ phương trình { x + y = 5 ; 2x - y = 1 } là:", options: ["(x; y) = (2; 3)", "(x; y) = (3; 2)", "(x; y) = (1; 4)", "(x; y) = (4; 1)"], correctIndex: 0, explanation: "3x = 6 => x = 2, y = 3." },
              { question: "Biệt thức Δ của phương trình 2x² - 5x + 2 = 0 bằng:", options: ["9", "25", "-9", "41"], correctIndex: 0, explanation: "25 - 16 = 9." },
              { question: "Tổng S và tích P hai nghiệm phương trình x² - 7x + 10 = 0 là:", options: ["S = 7; P = 10", "S = -7; P = 10", "S = 7; P = -10", "S = 10; P = 7"], correctIndex: 0, explanation: "S = 7, P = 10." },
              { question: "Phương trình x² - (m + 2)x + m + 1 = 0 luôn có 1 nghiệm bằng:", options: ["x = 1", "x = -1", "x = 2", "x = 0"], correctIndex: 0, explanation: "a + b + c = 0 => nghiệm x = 1." },
              { question: "Điều kiện để ax² + bx + c = 0 có hai nghiệm trái dấu là:", options: ["a · c < 0", "Δ > 0 và P > 0", "a · c > 0", "Δ = 0"], correctIndex: 0, explanation: "a · c < 0." },
              { question: "Cho x² - 6x + 8 = 0 có 2 nghiệm x₁, x₂. Giá trị x₁² + x₂² bằng:", options: ["20", "36", "16", "28"], correctIndex: 0, explanation: "S² - 2P = 36 - 16 = 20." },
              { question: "Hệ { 2x - y = 3 ; 4x - 2y = 5 } có bao nhiêu nghiệm?", options: ["Vô nghiệm", "1 nghiệm", "Vô số nghiệm", "2 nghiệm"], correctIndex: 0, explanation: "2/4 = -1/-2 ≠ 3/5 => Vô nghiệm." },
              { question: "Hàm số y = 3x² đồng biến khi:", options: ["x > 0", "x < 0", "Mọi x", "x = 0"], correctIndex: 0, explanation: "a > 0 nên đồng biến khi x > 0." },
              { question: "Nếu a - b + c = 0 thì ax² + bx + c = 0 có nghiệm là:", options: ["x₁ = -1; x₂ = -c/a", "x₁ = 1; x₂ = c/a", "x₁ = -1; x₂ = c/a", "x₁ = 1; x₂ = -c/a"], correctIndex: 0, explanation: "x₁ = -1, x₂ = -c/a." },
              { question: "Phương trình bậc hai có Δ = 0 thì:", options: ["Có nghiệm kép x = -b / (2a)", "Có 2 nghiệm phân biệt", "Vô nghiệm", "Vô số nghiệm"], correctIndex: 0, explanation: "Nghiệm kép." },
              { question: "Đồ thị hàm số y = -2x² có đặc điểm:", options: ["Nằm phía dưới trục hoành, O là điểm cao nhất", "Nằm trên trục hoành", "Là đường thẳng", "Không qua O"], correctIndex: 0, explanation: "a < 0 nên nằm dưới Ox." },
              { question: "Tìm hai số biết tổng bằng 25 và hiệu bằng 7:", options: ["16 và 9", "18 và 7", "15 và 10", "17 và 8"], correctIndex: 0, explanation: "16 và 9." }
            ],
            trueFalse: [
              { statement: "Nếu a và c trái dấu (ac < 0) thì phương trình bậc hai luôn có hai nghiệm phân biệt.", correct: true, explanation: "Đúng." },
              { statement: "Đồ thị hàm số y = ax² (a ≠ 0) luôn nhận trục tung Oy làm trục đối xứng.", correct: true, explanation: "Đúng." },
              { statement: "Hệ thức Vi-ét áp dụng được cho cả phương trình bậc hai vô nghiệm.", correct: false, explanation: "Sai. Phải có điều kiện Δ ≥ 0." },
              { statement: "Phương trình bậc nhất hai ẩn ax + by = c luôn có vô số nghiệm.", correct: true, explanation: "Đúng." }
            ],
            shortAnswer: [
              { id: "sa-1", question: "Giải hệ { 2x + y = 10 ; x - y = 2 }. Tìm x:", correctAnswer: "4", rubric: "3x = 12 => x = 4." },
              { id: "sa-2", question: "Gọi x₁, x₂ là nghiệm của x² - 9x + 14 = 0. Tính 1/x₁ + 1/x₂ (dạng a/b):", correctAnswer: "9/14", rubric: "S/P = 9/14." },
              { id: "sa-3", question: "Tìm m để phương trình x² - 2x + m = 0 có nghiệm kép:", correctAnswer: "1", rubric: "Δ' = 1 - m = 0 => m = 1." },
              { id: "sa-4", question: "Tìm hoành độ giao điểm dương của Parabol y = x² và đường thẳng y = 2x:", correctAnswer: "2", rubric: "x² = 2x => x = 2." }
            ]
          },
          {
            id: "g9-hh",
            title: "B. Hình học 9 (Toàn bộ 4 Chương & Tứ giác nội tiếp)",
            theory: `### 1. Hệ thức lượng trong tam giác vuông (Trang 102-104)
Cho ΔABC vuông tại A, đường cao AH:
• AB² = BH · BC ; AC² = CH · BC ; AH² = BH · CH ; AB · AC = BC · AH ; 1/AH² = 1/AB² + 1/AC².
• sin²α + cos²α = 1 ; tan α · cot α = 1.

### 2. Đường tròn & Tứ giác nội tiếp (Trang 105-120)
• Góc nội tiếp và góc tạo bởi tia tiếp tuyến & dây cung bằng nửa số đo cung bị chắn. Góc nội tiếp chắn nửa đường tròn = 90°.
• Tứ giác nội tiếp: Tổng hai góc đối diện bằng 180° (∠A + ∠C = 180°).

### 3. Hình trụ, Hình nón, Hình cầu (Trang 121-123)
• Hình trụ: S(xq) = 2πrh ; V = πr²h.
• Hình nón: S(xq) = πrl ; V = (1/3)πr²h.
• Hình cầu: S = 4πR² ; V = (4/3)πR³.`,
            quiz: [
              { question: "Cho ΔABC vuông tại A, đường cao AH có BH = 4cm, CH = 9cm. Độ dài AH bằng:", options: ["6cm", "13cm", "36cm", "5cm"], correctIndex: 0, explanation: "AH = √(4 · 9) = 6cm." },
              { question: "Với góc nhọn α bất kỳ, đẳng thức nào luôn ĐÚNG?", options: ["sin²α + cos²α = 1", "sin²α - cos²α = 1", "tan α = cos α / sin α", "sin α + cos α = 1"], correctIndex: 0, explanation: "sin²α + cos²α = 1." },
              { question: "Góc nội tiếp chắn nửa đường tròn có số đo bằng:", options: ["90°", "180°", "60°", "45°"], correctIndex: 0, explanation: "90°." },
              { question: "Tứ giác ABCD nội tiếp đường tròn thì tổng hai góc đối ∠A + ∠C bằng:", options: ["180°", "360°", "90°", "120°"], correctIndex: 0, explanation: "180°." },
              { question: "Thể tích hình trụ có bán kính r = 3cm và chiều cao h = 5cm là:", options: ["45π cm³", "15π cm³", "30π cm³", "75π cm³"], correctIndex: 0, explanation: "V = π · 3² · 5 = 45π cm³." },
              { question: "Hình cầu bán kính R = 3cm có diện tích mặt cầu bằng:", options: ["36π cm²", "12π cm²", "27π cm²", "108π cm²"], correctIndex: 0, explanation: "4πR² = 36π cm²." },
              { question: "Đường kính vuông góc với một dây cung thì:", options: ["Đi qua trung điểm của dây ấy", "Song song với dây ấy", "Bằng nửa dây ấy", "Không cắt dây ấy"], correctIndex: 0, explanation: "Đi qua trung điểm của dây." },
              { question: "Hai đường tròn (O; 5cm) và (O'; 3cm) tiếp xúc ngoài khi OO' bằng:", options: ["8cm", "2cm", "15cm", "4cm"], correctIndex: 0, explanation: "5 + 3 = 8cm." },
              { question: "Tứ giác nào sau đây LUÔN nội tiếp được đường tròn?", options: ["Hình thang cân", "Hình thoi", "Hình bình hành", "Hình thang vuông"], correctIndex: 0, explanation: "Hình thang cân." },
              { question: "Hình nón có r = 3cm, h = 4cm. Độ dài đường sinh l bằng:", options: ["5cm", "7cm", "12cm", "25cm"], correctIndex: 0, explanation: "l = √(3² + 4²) = 5cm." },
              { question: "Trong một đường tròn, góc nội tiếp chắn cung 80° có số đo là:", options: ["40°", "80°", "160°", "20°"], correctIndex: 0, explanation: "80° / 2 = 40°." },
              { question: "Thể tích hình cầu bán kính R = 3cm là:", options: ["36π cm³", "12π cm³", "27π cm³", "108π cm³"], correctIndex: 0, explanation: "(4/3)π · 3³ = 36π cm³." }
            ],
            trueFalse: [
              { statement: "Đường kính là dây cung lớn nhất của đường tròn.", correct: true, explanation: "Đúng." },
              { statement: "Tứ giác có tổng hai góc đối bằng 180° thì nội tiếp được đường tròn.", correct: true, explanation: "Đúng." },
              { statement: "Thể tích hình nón bằng thể tích hình trụ có cùng bán kính đáy và chiều cao.", correct: false, explanation: "Sai. Bằng 1/3 thể tích hình trụ." },
              { statement: "Qua ba điểm thẳng hàng luôn vẽ được một đường tròn.", correct: false, explanation: "Sai." }
            ],
            shortAnswer: [
              { id: "sa-1", question: "Cho tam giác vuông có hai cạnh góc vuông 3cm và 4cm. Tính đường cao ứng với cạnh huyền (cm):", correctAnswer: "2.4", rubric: "3 · 4 / 5 = 2,4cm." },
              { id: "sa-2", question: "Tứ giác ABCD nội tiếp có ∠A = 75°. Tính góc đối diện ∠C (độ):", correctAnswer: "105", rubric: "180° - 75° = 105°." },
              { id: "sa-3", question: "Cho (O; 5cm), dây AB = 8cm. Tính khoảng cách từ tâm O đến dây AB (cm):", correctAnswer: "3", rubric: "√(5² - 4²) = 3cm." },
              { id: "sa-4", question: "Hình nón có r = 6cm, đường sinh l = 10cm. Tính diện tích xung quanh (theo π, ví dụ 60π):", correctAnswer: "60π", rubric: "πrl = 60π cm²." }
            ]
          }
        ]
      }
    ]
  }
};

const generateCustomArgonKey = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yy = String(today.getFullYear()).slice(-2);
  const dateNumbers = `${dd}${mm}${yy}`;
  const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  const prefix = letters[(seed * 7) % 26] + letters[(seed * 13) % 26] + letters[(seed * 19) % 26];
  const suffix = letters[(seed * 23) % 26] + letters[(seed * 29) % 26] + letters[(seed * 31) % 26];
  return `ARGON-${prefix}${dateNumbers}${suffix}`;
};

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("eduai_theme_mode");
    return saved ? saved === "dark" : false;
  });

  useEffect(() => {
    localStorage.setItem("eduai_theme_mode", isDark ? "dark" : "light");
  }, [isDark]);

  const [curriculum, setCurriculum] = useState(() => {
    try {
      const saved = localStorage.getItem("eduai_curriculum_data");
      return saved ? JSON.parse(saved) : INITIAL_CURRICULUM_DATA;
    } catch {
      return INITIAL_CURRICULUM_DATA;
    }
  });

  const [selectedGrade, setSelectedGrade] = useState("grade6");
  const [activeCourseId, setActiveCourseId] = useState("g6-ds");
  const [activeLessonId, setActiveLessonId] = useState("g6-ds-c1");

  const [sidebarWidth, setSidebarWidth] = useState(330);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const isResizingRef = useRef(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isResizingRef.current) return;
      const newWidth = Math.max(250, Math.min(e.clientX - 16, 580));
      setSidebarWidth(newWidth);
    };
    const handleMouseUp = () => {
      if (isResizingRef.current) {
        isResizingRef.current = false;
        document.body.style.cursor = "default";
        document.body.style.userSelect = "auto";
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const currentGradeObj = curriculum[selectedGrade] || curriculum["grade6"];
  const activeCourse = currentGradeObj.courses.find(c => c.id === activeCourseId) || currentGradeObj.courses[0];
  const activeLesson = activeCourse.lessons.find(l => l.id === activeLessonId) || activeCourse.lessons[0];

  const [readTheoryMap, setReadTheoryMap] = useState({});
  const [completedLessons, setCompletedLessons] = useState({});
  const [activeTab, setActiveTab] = useState("theory");

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [trueFalseAnswers, setTrueFalseAnswers] = useState({});
  const [shortAnswers, setShortAnswers] = useState({});

  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(null);
  const [tfScore, setTfScore] = useState(null);
  const [saScore, setSaScore] = useState(null);
  const [essayEvaluation, setEssayEvaluation] = useState(null);
  const [isGradingEssay, setIsGradingEssay] = useState(false);

  const [userNotes, setUserNotes] = useState({});
  const [chatOpen, setChatOpen] = useState(false);
  const [chatExpanded, setChatExpanded] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      sender: "bot",
      text: "Xin chào! Mình là Argon — Gia sư AI Toán THCS trên giao diện macOS Tahoe Liquid Glass."
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isBotTyping, setIsBotTyping] = useState(false);
  const chatBottomRef = useRef(null);

  const [settingsOpen, setSettingsOpen] = useState(false);
  const [isInternalUnlocked, setIsInternalUnlocked] = useState(false);
  const [keyInput, setKeyInput] = useState("");
  const [keyError, setKeyError] = useState("");

  const [discordWebhookUrl, setDiscordWebhookUrl] = useState("https://discord.com/api/webhooks/...");
  const [webhookStatus, setWebhookStatus] = useState("");
  const [geminiApiKey, setGeminiApiKey] = useState("");
  const [argonSystemPrompt, setArgonSystemPrompt] = useState("Bạn là Argon, gia sư Toán THCS.");

  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editingTarget, setEditingTarget] = useState(null);
  const [editFormValues, setEditFormValues] = useState({});

  const resetLessonQuizState = () => {
    setActiveTab("theory");
    setSelectedAnswers({});
    setTrueFalseAnswers({});
    setShortAnswers({});
    setQuizSubmitted(false);
    setQuizScore(null);
    setTfScore(null);
    setSaScore(null);
    setEssayEvaluation(null);
  };

  const handleSelectGrade = (gradeKey) => {
    setSelectedGrade(gradeKey);
    const firstCourse = curriculum[gradeKey].courses[0];
    setActiveCourseId(firstCourse.id);
    setActiveLessonId(firstCourse.lessons[0].id);
    resetLessonQuizState();
  };

  const handleSelectLesson = (courseId, lessonId) => {
    setActiveCourseId(courseId);
    setActiveLessonId(lessonId);
    resetLessonQuizState();
  };

  const totalQuizCount = activeLesson.quiz?.length || 12;
  const answeredQuizCount = Object.keys(selectedAnswers).length;

  const totalTfCount = activeLesson.trueFalse?.length || 4;
  const answeredTfCount = Object.keys(trueFalseAnswers).length;

  const totalSaCount = activeLesson.shortAnswer?.length || 4;
  const answeredSaCount = Object.values(shortAnswers).filter(val => val && val.trim().length > 0).length;

  const totalQuestions = totalQuizCount + totalTfCount + totalSaCount;
  const totalAnswered = answeredQuizCount + answeredTfCount + answeredSaCount;

  const canSubmitAll =
    answeredQuizCount === totalQuizCount &&
    answeredTfCount === totalTfCount &&
    answeredSaCount === totalSaCount;

  const totalLessonsCount = Object.values(curriculum).reduce(
    (acc, g) => acc + g.courses.reduce((cAcc, c) => cAcc + c.lessons.length, 0),
    0
  );
  const completedCount = Object.keys(completedLessons).length;

  const callArgonAI = async (userPrompt) => {
    try {
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${geminiApiKey.trim()}`;
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: `${argonSystemPrompt}\nBài: ${activeLesson.title}` }] },
          contents: [{ role: "user", parts: [{ text: userPrompt }] }]
        })
      });
      const data = await response.json();
      return data?.candidates?.[0]?.content?.parts?.[0]?.text || null;
    } catch {
      return null;
    }
  };

  const handleSubmitQuizAndEssay = async () => {
    if (!canSubmitAll) return;
    let qCorrect = 0;
    activeLesson.quiz.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctIndex) qCorrect++;
    });
    setQuizScore(qCorrect);

    let tfCorrect = 0;
    activeLesson.trueFalse.forEach((item, idx) => {
      if (trueFalseAnswers[idx] === item.correct) tfCorrect++;
    });
    setTfScore(tfCorrect);

    let saCorrect = 0;
    activeLesson.shortAnswer.forEach((item, idx) => {
      const userAns = (shortAnswers[idx] || "").trim().toLowerCase().replace(/\s+/g, "");
      const targetAns = item.correctAnswer.trim().toLowerCase().replace(/\s+/g, "");
      if (userAns === targetAns) saCorrect++;
    });
    setSaScore(saCorrect);
    setQuizSubmitted(true);
    setIsGradingEssay(true);

    const total10Score =
      Math.round(
        ((qCorrect / totalQuizCount) * 3 +
          (tfCorrect / totalTfCount) * 4 +
          (saCorrect / totalSaCount) * 3) *
          10
      ) / 10;

    setCompletedLessons(prev => ({ ...prev, [activeLesson.id]: true }));
    setEssayEvaluation(`📊 Tổng điểm: ${total10Score} / 10 Điểm\n• Trắc nghiệm: ${qCorrect}/${totalQuizCount}\n• Đúng/Sai: ${tfCorrect}/${totalTfCount}\n• Trả lời ngắn: ${saCorrect}/${totalSaCount}`);
    setIsGradingEssay(false);
  };

  const triggerArgonPrompt = async (customText) => {
    const textToSend = customText !== undefined ? customText : inputMessage;
    if (!textToSend.trim()) return;
    setChatMessages(prev => [...prev, { sender: "user", text: textToSend.trim() }]);
    if (customText === undefined) setInputMessage("");
    setIsBotTyping(true);

    setTimeout(() => {
      setChatMessages(prev => [
        ...prev,
        { sender: "bot", text: `Argon đã ghi nhận: "${textToSend.trim()}". Hãy áp dụng định lý trong bài nhé!` }
      ]);
      setIsBotTyping(false);
    }, 400);
  };

  useEffect(() => {
    if (chatOpen) {
      chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatMessages, chatOpen, isBotTyping]);

  const liquidWindowGlass = isDark
    ? "bg-[#0d101d]/65 backdrop-blur-3xl border border-white/20 shadow-[0_24px_80px_rgba(0,0,0,0.75),inset_0_1px_1px_rgba(255,255,255,0.25)] text-white"
    : "bg-white/55 backdrop-blur-3xl border border-white/70 shadow-[0_20px_60px_rgba(14,116,144,0.18),inset_0_1px_2px_rgba(255,255,255,0.95)] text-slate-900";

  const liquidCardGlass = isDark
    ? "bg-white/[0.06] backdrop-blur-2xl border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.18)]"
    : "bg-white/65 backdrop-blur-2xl border border-white/80 shadow-[0_8px_28px_rgba(2,132,199,0.08),inset_0_1px_2px_rgba(255,255,255,0.95)]";

  const liquidPillGlass = isDark
    ? "bg-white/[0.08] hover:bg-white/[0.14] border border-white/20 text-white"
    : "bg-white/70 hover:bg-white/90 border border-white/85 text-slate-800";

  const mutedText = isDark ? "text-slate-300/80" : "text-slate-600";

  return (
    <div
      className={`h-screen w-screen overflow-hidden flex flex-col font-sans select-none relative transition-colors duration-700 ${
        isDark ? "bg-[#060711] text-white" : "bg-[#7cc2f5] text-slate-900"
      }`}
    >
      {/* HÌNH NỀN ĐỘNG & VÙNG SÁNG */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {isDark ? (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#1b1438_0%,#090a14_60%,#04050a_100%)]" />
            <div className="absolute -top-32 left-1/4 w-[650px] h-[650px] rounded-full bg-indigo-600/25 blur-[140px]" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-[#a8d8ff] via-[#4ea8de] to-[#00509d]" />
            <div className="absolute -top-24 -left-24 w-[700px] h-[700px] rounded-full bg-[#e0f2fe]/80 blur-[110px]" />
          </>
        )}
      </div>

      {/* THANH MENU BAR CHỈ CÓ NÚT SÁNG / TỐI */}
      <header
        className={`relative z-30 h-9 px-4 flex items-center justify-between text-xs font-semibold shrink-0 transition-colors ${
          isDark
            ? "bg-black/30 backdrop-blur-2xl border-b border-white/10 text-white/90"
            : "bg-white/35 backdrop-blur-2xl border-b border-white/50 text-slate-900"
        }`}
      >
        <div className="flex items-center space-x-2 font-black">
          <Sparkles className="w-3.5 h-3.5 text-sky-400" />
          <span>EduAI Tahoe</span>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsDark(!isDark)}
            className={`px-3 py-1 rounded-full flex items-center space-x-1 text-[11px] font-bold transition-all cursor-pointer border ${
              isDark
                ? "bg-indigo-500/30 border-indigo-400/50 text-amber-300 shadow-[0_0_12px_rgba(99,102,241,0.4)]"
                : "bg-white/60 border-white text-slate-800 shadow-xs"
            }`}
            title="Chuyển đổi Sáng / Tối"
          >
            {isDark ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-300" />
                <span>Sáng</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-sky-700" />
                <span>Tối</span>
              </>
            )}
          </button>
        </div>
      </header>

      {/* CỬA SỔ DESKTOP CHÍNH */}
      <div className="relative z-10 flex-1 flex overflow-hidden p-2 sm:p-3.5 gap-3">
        {!isSidebarCollapsed && (
          <aside
            style={{ width: `${sidebarWidth}px` }}
            className={`rounded-[28px] flex flex-col shrink-0 relative overflow-hidden transition-colors duration-300 select-auto ${liquidWindowGlass}`}
          >
            <div className="p-4 border-b border-white/20 flex items-center justify-between">
              <span className="font-black text-sm">Sổ tay Toán THCS</span>
              <button
                onClick={() => setIsSidebarCollapsed(true)}
                className="p-1.5 rounded-xl hover:bg-white/20 transition-colors cursor-pointer"
              >
                <PanelLeftClose className="w-4 h-4" />
              </button>
            </div>

            <div className="p-2.5 border-b border-white/15 grid grid-cols-4 gap-1.5 shrink-0">
              {Object.keys(curriculum).map((gradeKey) => {
                const isSelected = selectedGrade === gradeKey;
                const gradeObj = curriculum[gradeKey];
                return (
                  <button
                    key={gradeKey}
                    onClick={() => handleSelectGrade(gradeKey)}
                    className={`w-full py-2 text-xs font-extrabold rounded-2xl transition-all cursor-pointer ${
                      isSelected
                        ? "bg-gradient-to-b from-sky-400 to-blue-600 text-white shadow-md"
                        : `${liquidPillGlass} opacity-85 hover:opacity-100`
                    }`}
                  >
                    {gradeObj.name.replace("Khối ", "")}
                  </button>
                );
              })}
            </div>

            <div className="flex-1 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden p-3 space-y-4">
              {currentGradeObj.courses.map((course) => (
                <div key={course.id} className="space-y-1.5">
                  <div className="font-extrabold text-xs px-2 py-1 flex items-center space-x-1.5">
                    <BookOpen className="w-4 h-4 text-sky-400 shrink-0" />
                    <span className="truncate">{course.title}</span>
                  </div>

                  <div className="space-y-1.5 pl-2">
                    {course.lessons.map((lesson) => {
                      const isCurrent = activeLesson.id === lesson.id;
                      const isDone = completedLessons[lesson.id];
                      return (
                        <button
                          key={lesson.id}
                          onClick={() => handleSelectLesson(course.id, lesson.id)}
                          className={`w-full text-left px-3.5 py-2.5 rounded-2xl text-xs transition-all flex items-center justify-between cursor-pointer ${
                            isCurrent
                              ? "bg-white/25 text-white font-extrabold border border-white/35"
                              : "hover:bg-white/15 opacity-85 hover:opacity-100 font-medium"
                          }`}
                        >
                          <span className="truncate pr-2 flex-1">{lesson.title}</span>
                          {isDone && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 border-t border-white/20 flex items-center justify-between text-xs font-bold">
              <span>Hoàn thành:</span>
              <span className="text-sky-400 font-black">{completedCount}/{totalLessonsCount}</span>
            </div>
          </aside>
        )}

        <main className={`flex-1 rounded-[28px] flex flex-col overflow-hidden relative ${liquidWindowGlass}`}>
          <div className="px-5 py-3.5 border-b border-white/20 flex items-center justify-between gap-3 shrink-0">
            <div className="flex items-center space-x-3 overflow-hidden">
              {isSidebarCollapsed && (
                <button
                  onClick={() => setIsSidebarCollapsed(false)}
                  className={`px-3 py-2 rounded-2xl text-xs font-extrabold flex items-center space-x-1.5 cursor-pointer ${liquidPillGlass}`}
                >
                  <PanelLeftOpen className="w-4 h-4 text-sky-400" />
                  <span>Mục lục</span>
                </button>
              )}
              <h2 className="text-sm font-black truncate">{activeLesson.title}</h2>
            </div>

            <div className="flex items-center p-1 rounded-2xl bg-black/15 border border-white/20">
              <button
                onClick={() => setActiveTab("theory")}
                className={`px-3 py-1.5 rounded-xl text-xs font-extrabold ${activeTab === "theory" ? "bg-white text-slate-900 shadow-md" : "opacity-80"}`}
              >
                1. Lý thuyết
              </button>
              <button
                onClick={() => setActiveTab("quiz")}
                className={`px-3 py-1.5 rounded-xl text-xs font-extrabold ${activeTab === "quiz" ? "bg-white text-slate-900 shadow-md" : "opacity-80"}`}
              >
                2. Bài kiểm tra (20 câu)
              </button>
              <button
                onClick={() => setActiveTab("notes")}
                className={`px-3 py-1.5 rounded-xl text-xs font-extrabold ${activeTab === "notes" ? "bg-white text-slate-900 shadow-md" : "opacity-80"}`}
              >
                3. Ghi chú
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden p-6 max-w-4xl mx-auto w-full select-auto space-y-6">
            {activeTab === "theory" && (
              <div className="space-y-6">
                <div className={`p-6 rounded-3xl space-y-3 ${liquidCardGlass}`}>
                  {activeLesson.theory.split("\n").map((line, i) => {
                    if (line.startsWith("### ")) {
                      return (
                        <h3 key={i} className="text-base font-black text-sky-400 pt-3 pb-1 border-b border-white/20">
                          {line.replace("### ", "")}
                        </h3>
                      );
                    }
                    return <p key={i} className="text-sm leading-relaxed whitespace-pre-wrap">{line}</p>;
                  })}
                </div>
                <div className="flex justify-end pb-6">
                  <button
                    onClick={() => setActiveTab("quiz")}
                    className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white text-xs font-extrabold shadow-lg cursor-pointer"
                  >
                    Bắt đầu làm bài kiểm tra 20 câu →
                  </button>
                </div>
              </div>
            )}

            {activeTab === "quiz" && (
              <div className="space-y-7 pb-10">
                <div className="space-y-4">
                  <h3 className="font-black text-sm sm:text-base text-sky-400">Phần I: Trắc nghiệm (12 câu)</h3>
                  {activeLesson.quiz.map((q, qIdx) => (
                    <div key={qIdx} className={`p-5 rounded-3xl space-y-3 ${liquidCardGlass}`}>
                      <h4 className="font-extrabold text-xs sm:text-sm">Câu {qIdx + 1}: {q.question}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                        {q.options.map((opt, optIdx) => {
                          const isSelected = selectedAnswers[qIdx] === optIdx;
                          return (
                            <button
                              key={optIdx}
                              onClick={() => setSelectedAnswers(prev => ({ ...prev, [qIdx]: optIdx }))}
                              className={`w-full text-left px-4 py-3 rounded-2xl text-xs transition-all cursor-pointer ${
                                isSelected ? "bg-sky-500 text-white font-extrabold" : liquidPillGlass
                              }`}
                            >
                              {String.fromCharCode(65 + optIdx)}. {opt}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleSubmitQuizAndEssay}
                  className="w-full py-4 rounded-3xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-black text-sm cursor-pointer shadow-xl"
                >
                  Nộp bài kiểm tra ngay
                </button>

                {essayEvaluation && (
                  <div className={`p-5 rounded-3xl whitespace-pre-wrap text-xs ${liquidCardGlass}`}>
                    {essayEvaluation}
                  </div>
                )}
              </div>
            )}

            {activeTab === "notes" && (
              <div className={`p-6 rounded-3xl space-y-4 ${liquidCardGlass}`}>
                <h3 className="font-black text-sm">Ghi chú cá nhân</h3>
                <textarea
                  value={userNotes[activeLesson.id] || ""}
                  onChange={e => setUserNotes(prev => ({ ...prev, [activeLesson.id]: e.target.value }))}
                  placeholder="Ghi lại công thức..."
                  className="w-full h-72 p-4 rounded-2xl text-xs bg-black/3ul border border-white/20 focus:outline-none"
                />
              </div>
            )}
          </div>
        </main>
      </div>

      {/* TRỢ LÝ ARGON AI */}
      <div className="fixed bottom-5 right-5 z-40">
        {!chatOpen ? (
          <button
            onClick={() => setChatOpen(true)}
            className="px-5 py-3.5 rounded-full bg-[#131126]/90 hover:bg-[#1c1936] text-white border border-white/25 shadow-2xl backdrop-blur-2xl flex items-center space-x-2.5 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-indigo-300" />
            <span className="text-xs font-extrabold tracking-wider uppercase">ARGON • AI ASSISTANT</span>
          </button>
        ) : (
          <div className="w-[380px] sm:w-[440px] rounded-[34px] p-5 bg-[#100e20]/90 backdrop-blur-3xl border border-white/25 shadow-2xl text-white relative">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
              <span className="font-extrabold text-sm">Gia sư Argon AI</span>
              <button onClick={() => setChatOpen(false)} className="p-1.5 rounded-full hover:bg-white/20 cursor-pointer">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="h-60 overflow-y-auto space-y-2 mb-3 pr-1 select-auto">
              {chatMessages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-xs ${msg.sender === "user" ? "bg-indigo-600 text-white" : "bg-white/10 text-slate-100"}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={chatBottomRef} />
            </div>

            <div className="flex items-center px-3 py-2 rounded-2xl bg-white/10 border border-white/20">
              <input
                type="text"
                value={inputMessage}
                onChange={e => setInputMessage(e.target.value)}
                onKeyDown={e => e.key === "Enter" && triggerArgonPrompt()}
                placeholder="Hỏi Argon bài toán..."
                className="flex-1 bg-transparent text-xs text-white placeholder-slate-300 focus:outline-none"
              />
              <button onClick={() => triggerArgonPrompt()} className="p-2 bg-white text-slate-900 rounded-full cursor-pointer">
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
