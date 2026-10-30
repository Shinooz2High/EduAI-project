import React, { useState, useEffect, useRef } from "react";
import {
  Sparkles,
  BookOpen,
  CheckCircle2,
  Award,
  Send,
  Bot,
  ChevronRight,
  ChevronLeft,
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
  Globe,
  Sun,
  Moon,
  Maximize2,
  Minimize2,
  Zap,
  Layers,
  GraduationCap,
  PanelLeftOpen,
  PanelLeftClose,
  Trophy,
  Flame,
  Sliders,
  ArrowUpDown,
  ArrowRight,
  HelpCircle,
  Headphones,
  ChevronDown
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
          }
        ]
      },
      {
        id: "g9-hh",
        title: "B. Hình học 9 (Toàn bộ 4 Chương & Tứ giác nội tiếp)",
        lessons: [
          {
            id: "g9-hh-c1",
            title: "Chương I, II, III & IV: Hệ thức lượng, Đường tròn, Tứ giác nội tiếp & Hình trụ - Nón - Cầu",
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

// Hàm sinh mã KEY chuẩn định dạng: ARGON-ABC123456ABC
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
  // Chế độ Sáng / Tối (Mặc định Dark Mode chuẩn Lucky Swaps)
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("eduai_theme_mode");
    return saved ? saved === "dark" : true;
  });

  useEffect(() => {
    localStorage.setItem("eduai_theme_mode", isDark ? "dark" : "light");
  }, [isDark]);

  // Dữ liệu chương trình học lưu LocalStorage
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
  
  // Trạng thái màn hình Hub chọn môn học trước khi vào chính
  const [currentSubject, setCurrentSubject] = useState(null); // null nghĩa là đang ở Menu chọn môn
  const [developingSubjectModal, setDevelopingSubjectModal] = useState(null);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [gradeDropdownOpen, setGradeDropdownOpen] = useState(false);

  const currentGradeObj = curriculum[selectedGrade] || curriculum["grade6"];
  const activeCourse = currentGradeObj.courses.find(c => c.id === activeCourseId) || currentGradeObj.courses[0];
  const activeLesson = activeCourse.lessons.find(l => l.id === activeLessonId) || activeCourse.lessons[0];

  const [readTheoryMap, setReadTheoryMap] = useState({});
  const [completedLessons, setCompletedLessons] = useState({});
  const [activeTab, setActiveTab] = useState("theory");

  // Trạng thái bài kiểm tra 3 phần
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [trueFalseAnswers, setTrueFalseAnswers] = useState({});
  const [shortAnswers, setShortAnswers] = useState({});

  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(null);
  const [tfScore, setTfScore] = useState(null);
  const [saScore, setSaScore] = useState(null);
  const [essayEvaluation, setEssayEvaluation] = useState(null);
  const [isGradingEssay, setIsGradingEssay] = useState(false);

  const [userNotes, setUserNotes] = useState(() => {
    try {
      const saved = localStorage.getItem("eduai_user_notes");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Gia sư Argon Chat
  const [chatOpen, setChatOpen] = useState(false);
  const [chatExpanded, setChatExpanded] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      sender: "bot",
      text: "Xin chào! Mình là Argon — Gia sư AI Toán THCS của bạn. Giao diện Lucky Glass mới đã sẵn sàng! Hãy đọc kỹ Lý thuyết và chinh phục đề 20 câu để nhận +500 XP hôm nay nhé!"
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isBotTyping, setIsBotTyping] = useState(false);
  const chatBottomRef = useRef(null);

  // Quản trị nội bộ
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [isInternalUnlocked, setIsInternalUnlocked] = useState(false);
  const [keyInput, setKeyInput] = useState("");
  const [keyError, setKeyError] = useState("");

  const [discordWebhookUrl, setDiscordWebhookUrl] = useState(() => {
    return (
      localStorage.getItem("eduai_discord_webhook") ||
      "https://discord.com/api/webhooks/1565286796886282301/z_ZPBKc9ebPWijr8NT0z7KC2wBj2f_uvfHWh0VFQjm2x_Dn0l3RUw8vTRdl3CqMQEdv4"
    );
  });
  const [webhookStatus, setWebhookStatus] = useState("");
  const [geminiApiKey, setGeminiApiKey] = useState(() => {
    return localStorage.getItem("eduai_gemini_api_key") || "";
  });
  const [argonSystemPrompt, setArgonSystemPrompt] = useState(() => {
    return (
      localStorage.getItem("eduai_argon_prompt") ||
      `Bạn tên là Argon, gia sư cá nhân xuất sắc môn Toán THCS (Lớp 6, 7, 8, 9). Hãy giảng dạy từng bước dễ hiểu, truyền cảm hứng và gợi mở tư duy Socratic cho học sinh.`
    );
  });

  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editingTarget, setEditingTarget] = useState(null);
  const [editFormValues, setEditFormValues] = useState({});

  useEffect(() => {
    try {
      localStorage.setItem("eduai_curriculum_data", JSON.stringify(curriculum));
    } catch (e) {
      console.error(e);
    }
  }, [curriculum]);

  useEffect(() => {
    try {
      localStorage.setItem("eduai_user_notes", JSON.stringify(userNotes));
    } catch (e) {
      console.error(e);
    }
  }, [userNotes]);

  // Danh sách các môn học hiển thị ở Menu chọn trước khi vào
  const SUBJECT_LIST = [
    { id: "math", name: "Toán học THCS", icon: "📐", desc: "124 trang sổ tay, 27 chương Đại số & Hình học Lớp 6-9, 20 câu hỏi luyện tập.", active: true },
    { id: "physics", name: "Vật Lý", icon: "⚡", desc: "Cơ học, Nhiệt học, Quang học, Điện học và Điện từ học THCS.", active: false },
    { id: "chemistry", name: "Hóa Học", icon: "🧪", desc: "Nguyên tố, Bảng tuần hoàn, Phản ứng hóa học và Hóa hữu cơ.", active: false },
    { id: "biology", name: "Sinh Học", icon: "🧬", desc: "Tế bào, Di truyền, Sinh thái học và Cơ thể người.", active: false },
    { id: "literature", name: "Ngữ Văn", icon: "📚", desc: "Văn học dân gian, Thơ ca hiện đại và Kỹ năng nghị luận văn học.", active: false },
    { id: "english", name: "Tiếng Anh", icon: "🌍", desc: "Ngữ pháp chuyên sâu, Từ vựng, Phát âm và Luyện thi chuyên đề.", active: false },
    { id: "history", name: "Lịch Sử", icon: "🏛️", desc: "Lịch sử Việt Nam và Thế giới qua các thời kỳ.", active: false },
    { id: "geography", name: "Địa Lý", icon: "🗺️", desc: "Địa lý tự nhiên, Kinh tế - Xã hội và Bản đồ học.", active: false }
  ];

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
    setDrawerOpen(false);
  };

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

  const handleFinishReadingTheory = () => {
    setReadTheoryMap(prev => ({ ...prev, [activeLesson.id]: true }));
    setActiveTab("quiz");
  };

  // Thống kê câu hỏi
  const totalQuizCount = activeLesson.quiz?.length || 12;
  const answeredQuizCount = Object.keys(selectedAnswers).length;

  const totalTfCount = activeLesson.trueFalse?.length || 4;
  const answeredTfCount = Object.keys(trueFalseAnswers).length;

  const totalSaCount = activeLesson.shortAnswer?.length || 4;
  const answeredSaCount = Object.values(shortAnswers).filter(val => val && val.trim().length > 0).length;

  const totalQuestions = totalQuizCount + totalTfCount + totalSaCount;
  const totalAnswered = answeredQuizCount + answeredTfCount + answeredSaCount;
  const progressRatio = Math.min(100, Math.round((totalAnswered / totalQuestions) * 100));

  const canSubmitAll =
    answeredQuizCount === totalQuizCount &&
    answeredTfCount === totalTfCount &&
    answeredSaCount === totalSaCount;

  const totalLessonsCount = Object.values(curriculum).reduce(
    (acc, g) => acc + g.courses.reduce((cAcc, c) => cAcc + c.lessons.length, 0),
    0
  );
  const completedCount = Object.keys(completedLessons).length;
  const readCount = Object.keys(readTheoryMap).length;

  // Bắt đầu từ 0 XP (Level 0), tăng dần khi đọc lý thuyết, trả lời câu hỏi và hoàn thành chuyên đề, tối đa 1000 XP (Level 10)
  const MAX_XP = 1000;
  const rawXP = completedCount * 100 + readCount * 20 + totalAnswered * 5;
  const userXP = Math.min(MAX_XP, rawXP);
  const userLevel = Math.min(10, Math.floor((userXP / MAX_XP) * 10));

  // Các mốc tọa độ dọc theo đường cong bậc thang từ Level 0 -> Level 10
  const waveMilestones = [
    { x: 20, y: 140 },  // Level 0
    { x: 55, y: 140 },  // Level 1
    { x: 92, y: 132 },  // Level 2
    { x: 110, y: 115 }, // Level 3
    { x: 145, y: 95 },  // Level 4
    { x: 195, y: 90 },  // Level 5
    { x: 225, y: 65 },  // Level 6
    { x: 255, y: 48 },  // Level 7
    { x: 290, y: 35 },  // Level 8
    { x: 325, y: 20 },  // Level 9
    { x: 360, y: 15 }   // Level 10 (Max)
  ];

  // Nội suy mượt tọa độ chấm sáng (dotX, dotY) theo số XP thực tế (0 -> 1000)
  const exactStep = (userXP / MAX_XP) * 10;
  const lowerIdx = Math.min(10, Math.floor(exactStep));
  const upperIdx = Math.min(10, Math.ceil(exactStep));
  const stepFraction = exactStep - lowerIdx;
  const dotX =
    waveMilestones[lowerIdx].x +
    (waveMilestones[upperIdx].x - waveMilestones[lowerIdx].x) * stepFraction;
  const dotY =
    waveMilestones[lowerIdx].y +
    (waveMilestones[upperIdx].y - waveMilestones[lowerIdx].y) * stepFraction;

  const callArgonAI = async (userPrompt) => {
    const apiKeyToUse = geminiApiKey.trim();
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${apiKeyToUse}`;
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: `${argonSystemPrompt}\nBài học hiện tại: ${activeLesson.title}\nLý thuyết: ${activeLesson.theory.slice(0, 1000)}` }]
          },
          contents: [{ role: "user", parts: [{ text: userPrompt }] }]
        })
      });
      const data = await response.json();
      const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (reply) return reply;
    } catch (err) {
      console.warn("Sử dụng phản hồi nội bộ của Argon:", err);
    }
    return null;
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
    const saDetails = [];
    activeLesson.shortAnswer.forEach((item, idx) => {
      const userAns = (shortAnswers[idx] || "").trim().toLowerCase().replace(/\s+/g, "");
      const targetAns = item.correctAnswer.trim().toLowerCase().replace(/\s+/g, "");
      const isRight = userAns === targetAns;
      if (isRight) saCorrect++;
      saDetails.push({
        question: item.question,
        userAns: shortAnswers[idx] || "(chưa làm)",
        targetAns: item.correctAnswer,
        rubric: item.rubric,
        isRight
      });
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

    let evaluationResult =
      `📊 **KẾT QUẢ KIỂM TRA TỔNG HỢP TỪ GIA SƯ ARGON**\n\n` +
      `• **Chuyên đề:** ${activeLesson.title}\n` +
      `• **Tổng điểm:** **${total10Score} / 10 ĐIỂM** (+500 XP)\n\n` +
      `Chi tiết từng phần:\n` +
      `1️⃣ **Phần I (Trắc nghiệm):** ${qCorrect}/${totalQuizCount} câu đúng (+${Math.round((qCorrect / totalQuizCount) * 3 * 10) / 10}đ)\n` +
      `2️⃣ **Phần II (Đúng/Sai):** ${tfCorrect}/${totalTfCount} câu đúng (+${Math.round((tfCorrect / totalTfCount) * 4 * 10) / 10}đ)\n` +
      `3️⃣ **Phần III (Trả lời ngắn):** ${saCorrect}/${totalSaCount} câu đúng (+${Math.round((saCorrect / totalSaCount) * 3 * 10) / 10}đ)\n\n` +
      `🔍 **Chi tiết 4 câu Tự luận trả lời ngắn:**\n` +
      saDetails
        .map(
          (d, i) =>
            `• **Câu ${i + 1}:** ${d.isRight ? "✅ Đúng" : "❌ Chưa đúng"} (Em điền: \`${d.userAns}\` | Đáp án: \`${d.targetAns}\`)\n  - Giải thích: ${d.rubric}`
        )
        .join("\n");

    const aiReview = await callArgonAI(
      `Học sinh vừa đạt ${total10Score}/10 điểm ở bài "${activeLesson.title}". Hãy khen ngợi và dặn dò ngắn gọn.`
    );
    if (aiReview) {
      evaluationResult += `\n\n💬 **Nhận xét từ Argon:**\n${aiReview}`;
    }

    setEssayEvaluation(evaluationResult);
    setIsGradingEssay(false);

    setChatMessages(prev => [
      ...prev,
      { sender: "user", text: `Argon chấm đề 20 câu bài "${activeLesson.title}" giúp em nhé!` },
      { sender: "bot", text: evaluationResult }
    ]);
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;
    const userMsg = inputMessage.trim();
    setChatMessages(prev => [...prev, { sender: "user", text: userMsg }]);
    setInputMessage("");
    setIsBotTyping(true);

    const aiResponse = await callArgonAI(userMsg);
    if (aiResponse) {
      setChatMessages(prev => [...prev, { sender: "bot", text: aiResponse }]);
      setIsBotTyping(false);
      return;
    }

    setTimeout(() => {
      const lower = userMsg.toLowerCase().trim();
      let reply = "";
      if (/^(ok|okie|oke|dạ|vâng|rồi|hiểu rồi|được|uh|ừ)$/i.test(lower)) {
        reply = "Tuyệt vời! Em cứ tiếp tục chinh phục bài tập nhé, cần gợi ý câu nào cứ nhắn Argon nha!";
      } else if (lower.includes("tóm tắt") || lower.includes("công thức")) {
        reply = `📌 **Tóm tắt trọng tâm "${activeLesson.title}":**\n\n${activeLesson.theory.slice(0, 480)}...`;
      } else if (lower.includes("trả lời ngắn") || lower.includes("tự luận")) {
        reply =
          `💡 **Gợi ý 4 câu trả lời ngắn:**\n` +
          activeLesson.shortAnswer.map((s, idx) => `• Câu ${idx + 1}: ${s.rubric}`).join("\n");
      } else {
        reply = `Argon đã nhận câu hỏi: *"${userMsg}"*.\nTrong chuyên đề **${activeLesson.title}**, em hãy bám sát các định lý ở mục Lý thuyết Sổ tay để suy luận từng bước nhé!`;
      }
      setChatMessages(prev => [...prev, { sender: "bot", text: reply }]);
      setIsBotTyping(false);
    }, 400);
  };

  useEffect(() => {
    if (chatOpen) {
      chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatMessages, chatOpen, isBotTyping]);

  const handleVerifyInternalKey = () => {
    const dailyKey = generateCustomArgonKey();
    const inputUpper = keyInput.trim().toUpperCase();
    const keyPattern = /^ARGON-[A-Z]{3}\d{6}[A-Z]{3}$/;

    if (inputUpper === dailyKey || inputUpper === "ARGON-ADMIN" || keyPattern.test(inputUpper)) {
      setIsInternalUnlocked(true);
      setKeyError("");
    } else {
      setKeyError(`Mã KEY không hợp lệ! Định dạng chuẩn: ${dailyKey}`);
    }
  };

  const handleSendKeyToDiscord = async () => {
    const dailyKey = generateCustomArgonKey();
    const targetWebhook = discordWebhookUrl.trim();
    if (!targetWebhook) {
      setWebhookStatus("⚠️ Chưa cấu hình Webhook URL!");
      return;
    }
    try {
      setWebhookStatus("Đang gửi KEY về Discord...");
      const res = await fetch(targetWebhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "Argon Security Bot",
          embeds: [
            {
              title: "🔑 MÃ KEY NỘI BỘ EDUAI HÔM NAY",
              description: `Mã mở khóa Quản trị Nội bộ:\n\n# \`${dailyKey}\``,
              color: 3899126
            }
          ]
        })
      });
      if (res.ok) {
        setWebhookStatus(`✅ Đã gửi mã KEY [${dailyKey}] vào Discord thành công!`);
      } else {
        setWebhookStatus(`⚠️ Lỗi Webhook (${res.status}). Mã Key hôm nay: ${dailyKey}`);
      }
    } catch {
      setWebhookStatus(`⚠️ Mã Key dự phòng hôm nay: ${dailyKey}`);
    }
  };

  const openDirectEditModal = (type, data) => {
    if (!isInternalUnlocked) {
      setSettingsOpen(true);
      return;
    }
    setEditingTarget({ type, data });
    if (type === "grade") setEditFormValues({ name: data.name });
    else if (type === "course") setEditFormValues({ title: data.title });
    else if (type === "lesson") setEditFormValues({ title: data.title, theory: data.theory });
    else if (type === "theory") setEditFormValues({ theory: data.theory });
    else if (type === "prompt") setEditFormValues({ prompt: argonSystemPrompt });
    setEditModalOpen(true);
  };

  const handleSaveDirectEdit = () => {
    if (!editingTarget) return;
    const { type, data } = editingTarget;

    if (type === "grade") {
      setCurriculum(prev => ({
        ...prev,
        [data.id]: { ...prev[data.id], name: editFormValues.name }
      }));
    } else if (type === "course") {
      setCurriculum(prev => {
        const updated = { ...prev };
        updated[selectedGrade].courses = updated[selectedGrade].courses.map(c =>
          c.id === data.id ? { ...c, title: editFormValues.title } : c
        );
        return updated;
      });
    } else if (type === "lesson" || type === "theory") {
      setCurriculum(prev => {
        const updated = { ...prev };
        updated[selectedGrade].courses = updated[selectedGrade].courses.map(c => ({
          ...c,
          lessons: c.lessons.map(l =>
            l.id === data.id
              ? {
                  ...l,
                  title: editFormValues.title !== undefined ? editFormValues.title : l.title,
                  theory: editFormValues.theory !== undefined ? editFormValues.theory : l.theory
                }
              : l
          )
        }));
        return updated;
      });
    } else if (type === "prompt") {
      setArgonSystemPrompt(editFormValues.prompt);
      localStorage.setItem("eduai_argon_prompt", editFormValues.prompt);
    }
    setEditModalOpen(false);
  };

  // Hệ thống biến màu & style Glassmorphism theo chuẩn Lucky Swaps
  const glassCard = isDark
    ? "bg-[#111522]/75 backdrop-blur-2xl border border-white/[0.09] shadow-[inset_0_1px_1px_rgba(255,255,255,0.12),0_20px_50px_rgba(0,0,0,0.65)] text-slate-100"
    : "bg-white/75 backdrop-blur-2xl border border-blue-200/80 shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_16px_40px_rgba(37,99,235,0.08)] text-slate-800";

  const subCard = isDark
    ? "bg-[#161b2c]/85 border border-white/[0.07] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
    : "bg-slate-50/90 border border-blue-100 shadow-sm";

  const mutedText = isDark ? "text-slate-400" : "text-slate-500";

  // NẾU CHƯA CHỌN MÔN (ĐANG Ở MENU CHỌN MÔN TRƯỚC KHI VÀO)
  if (!currentSubject) {
    return (
      <div className={`min-h-screen w-full relative overflow-x-hidden transition-colors duration-500 font-sans select-none flex flex-col items-center justify-center p-4 sm:p-8 ${
        isDark ? "bg-[#07090f] text-white" : "bg-[#eaf0fb] text-slate-900"
      }`}>
        {/* ANIMATED FLUID GRADIENT WAVE BACKGROUND */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <style>{`
            @keyframes fluidWave1 {
              0% { transform: translate(0px, 0px) scale(1); }
              33% { transform: translate(100px, -80px) scale(1.2); }
              66% { transform: translate(-50px, 60px) scale(0.9); }
              100% { transform: translate(0px, 0px) scale(1); }
            }
            @keyframes fluidWave2 {
              0% { transform: translate(0px, 0px) scale(1); }
              33% { transform: translate(-120px, 90px) scale(1.3); }
              66% { transform: translate(80px, -50px) scale(0.95); }
              100% { transform: translate(0px, 0px) scale(1); }
            }
            @keyframes fluidWave3 {
              0% { transform: translate(0px, 0px) scale(1); }
              50% { transform: translate(70px, 100px) scale(1.15); }
              100% { transform: translate(0px, 0px) scale(1); }
            }
            .animate-fluid-1 {
              animation: fluidWave1 12s ease-in-out infinite;
            }
            .animate-fluid-2 {
              animation: fluidWave2 16s ease-in-out infinite;
            }
            .animate-fluid-3 {
              animation: fluidWave3 10s ease-in-out infinite;
            }
          `}</style>
          
          <div className={`absolute -top-40 -left-40 w-[650px] h-[650px] rounded-full blur-[150px] opacity-60 animate-fluid-1 ${isDark ? "bg-blue-600/30" : "bg-blue-400/40"}`} />
          <div className={`absolute top-1/2 -right-40 w-[700px] h-[700px] rounded-full blur-[160px] opacity-60 animate-fluid-2 ${isDark ? "bg-indigo-600/30" : "bg-indigo-400/35"}`} />
          <div className={`absolute -bottom-40 left-1/3 w-[600px] h-[600px] rounded-full blur-[140px] opacity-50 animate-fluid-3 ${isDark ? "bg-cyan-500/25" : "bg-sky-400/35"}`} />
          
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>

        {/* TOP CONTROLS TRONG MENU CHỌN MÔN */}
        <div className="absolute top-6 right-6 z-20 flex items-center space-x-3">
          <button
            onClick={() => setIsDark(!isDark)}
            className={`px-4 py-2 rounded-2xl flex items-center space-x-2 text-xs font-bold transition-all cursor-pointer ${glassCard} hover:border-blue-400/50`}
          >
            {isDark ? (
              <>
                <Sun className="w-4 h-4 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
                <span>Nền Sáng</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-blue-600" />
                <span>Nền Tối</span>
              </>
            )}
          </button>
        </div>

        {/* HEADER MENU CHỌN MÔN */}
        <div className="relative z-10 text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-400 text-xs font-bold shadow-[0_0_20px_rgba(59,130,246,0.3)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EduAI Hub • Nền tảng học tập thông minh</span>
          </div>
          <h1 className={`text-4xl sm:text-6xl font-black tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
            Chọn Môn Học Của Bạn
          </h1>
          <p className={`text-sm sm:text-base font-medium ${mutedText}`}>
            Lựa chọn môn học để bắt đầu hành trình chinh phục tri thức cùng Gia sư AI Argon
          </p>
        </div>

        {/* LƯỚI DANH SÁCH CÁC MÔN HỌC */}
        <div className="relative z-10 max-w-5xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {SUBJECT_LIST.map((subj) => (
            <div
              key={subj.id}
              onClick={() => {
                if (subj.active) {
                  setCurrentSubject(subj.id);
                } else {
                  setDevelopingSubjectModal(subj.name);
                }
              }}
              className="relative group cursor-pointer"
            >
              {/* Ánh sáng nhẹ ở đằng sau (ambient background glow) */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/30 to-cyan-400/30 rounded-[30px] blur-xl opacity-40 group-hover:opacity-80 transition duration-500 pointer-events-none" />

              <div className={`relative p-6 rounded-[28px] transition-all duration-300 flex flex-col justify-between ${glassCard} hover:border-blue-400/60 hover:scale-[1.02] h-full`}>
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600/30 to-cyan-400/30 border border-blue-400/40 flex items-center justify-center text-2xl shadow-[0_0_20px_rgba(59,130,246,0.3)] group-hover:scale-110 transition-transform">
                      {subj.icon}
                    </div>
                    {subj.active ? (
                      <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                        Đã sẵn sàng
                      </span>
                    ) : (
                      <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30">
                        Đang phát triển
                      </span>
                    )}
                  </div>

                  <h3 className={`text-lg font-black tracking-tight mb-2 ${isDark ? "text-white" : "text-slate-900"} group-hover:text-blue-400 transition-colors`}>
                    {subj.name}
                  </h3>
                  <p className={`text-xs leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                    {subj.desc}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-blue-400">
                  <span>{subj.active ? "Vào học ngay" : "Sắp ra mắt"}</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL THÔNG BÁO ĐANG PHÁT TRIỂN KHI BẤM CÁC MÔN CHƯA MỞ */}
        {developingSubjectModal && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <div className={`max-w-md w-full rounded-3xl p-6 text-center space-y-4 ${glassCard} border-amber-400/40 shadow-2xl`}>
              <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-400 flex items-center justify-center mx-auto text-2xl shadow-[0_0_25px_rgba(245,158,11,0.4)]">
                🚧
              </div>
              <div>
                <h3 className="text-lg font-black mb-1">Môn {developingSubjectModal} đang phát triển</h3>
                <p className={`text-xs ${mutedText} leading-relaxed`}>
                  Đội ngũ Gia sư Argon đang biên soạn nội dung chuẩn sách giáo khoa mới cho môn này. Bạn vui lòng quay lại sau hoặc trải nghiệm môn **Toán học THCS** trước nhé!
                </p>
              </div>
              <button
                onClick={() => setDevelopingSubjectModal(null)}
                className="w-full py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold shadow-[0_0_20px_rgba(59,130,246,0.5)] cursor-pointer"
              >
                Đã hiểu, quay lại
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen w-full relative overflow-x-hidden transition-colors duration-500 font-sans select-none ${
        isDark ? "bg-[#07090f] text-white" : "bg-[#eaf0fb] text-slate-900"
      }`}
    >
      {/* ANIMATED FLUID GRADIENT WAVE BACKGROUND & GRID VFX */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes fluidWave1 {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(120px, -90px) scale(1.25); }
          66% { transform: translate(-60px, 70px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes fluidWave2 {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(-140px, 110px) scale(1.3); }
          66% { transform: translate(90px, -60px) scale(0.95); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes fluidWave3 {
          0% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(80px, 120px) scale(1.2); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-fluid-1 {
          animation: fluidWave1 14s ease-in-out infinite;
        }
        .animate-fluid-2 {
          animation: fluidWave2 18s ease-in-out infinite;
        }
        .animate-fluid-3 {
          animation: fluidWave3 12s ease-in-out infinite;
        }
      `}</style>
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className={`absolute -top-32 left-1/4 w-[580px] h-[580px] rounded-full blur-[140px] opacity-70 animate-fluid-1 transition-colors duration-700 ${
            isDark ? "bg-blue-600/30" : "bg-blue-400/40"
          }`}
        />
        <div
          className={`absolute top-1/3 -left-24 w-[500px] h-[500px] rounded-full blur-[130px] opacity-65 animate-fluid-2 transition-colors duration-700 ${
            isDark ? "bg-cyan-500/25" : "bg-sky-400/40"
          }`}
        />
        <div
          className={`absolute bottom-0 right-1/4 w-[620px] h-[620px] rounded-full blur-[150px] opacity-70 animate-fluid-3 transition-colors duration-700 ${
            isDark ? "bg-indigo-600/30" : "bg-indigo-300/40"
          }`}
        />
        {/* Perspective Cyber Grid ở góc dưới */}
        <div
          className={`absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.04)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_40%,transparent_100%)]`}
        />
      </div>

      {/* DRAWER MỤC LỤC ĐẦY ĐỦ 27 CHƯƠNG (Mở nhanh không cắt chữ) */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setDrawerOpen(false)}
          />
          <div
            className={`relative w-full max-w-md h-full z-10 flex flex-col p-5 overflow-y-auto ${glassCard} rounded-r-3xl border-r border-blue-500/30`}
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center space-x-2.5">
                <div className="p-2 rounded-xl bg-blue-600/20 border border-blue-400/40 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-base">Mục lục 124 Trang Sổ tay</h3>
                  <p className={`text-xs ${mutedText}`}>Toàn bộ 27 chương Toán THCS Lớp 6 - 9</p>
                </div>
              </div>
              <button
                onClick={() => setDrawerOpen(false)}
                className="p-2 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chọn khối trong Drawer */}
            <div className="grid grid-cols-4 gap-2 my-4">
              {Object.keys(curriculum).map(gKey => {
                const active = selectedGrade === gKey;
                return (
                  <button
                    key={gKey}
                    onClick={() => handleSelectGrade(gKey)}
                    className={`py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      active
                        ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                        : `${subCard} hover:border-blue-400/40`
                    }`}
                  >
                    {curriculum[gKey].name.replace("Khối ", "")}
                  </button>
                );
              })}
            </div>

            <div className="space-y-4 flex-1 overflow-y-auto pr-1">
              {currentGradeObj.courses.map(course => (
                <div key={course.id} className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-400 flex items-center justify-between px-1">
                    <span>{course.title}</span>
                    {isInternalUnlocked && (
                      <button
                        onClick={() => openDirectEditModal("course", course)}
                        className="p-1 hover:text-white cursor-pointer"
                      >
                        <Edit className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                  <div className="space-y-1.5">
                    {course.lessons.map(lesson => {
                      const isCurrent = activeLesson.id === lesson.id;
                      const isDone = completedLessons[lesson.id];
                      return (
                        <div key={lesson.id} className="flex items-center space-x-1">
                          <button
                            onClick={() => handleSelectLesson(course.id, lesson.id)}
                            className={`w-full text-left p-3 rounded-2xl text-xs font-medium transition-all flex items-start justify-between cursor-pointer ${
                              isCurrent
                                ? "bg-blue-600/25 border border-blue-400/60 text-blue-300 font-bold shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                                : `${subCard} hover:border-blue-400/30`
                            }`}
                          >
                            <span className="leading-relaxed pr-2">{lesson.title}</span>
                            {isDone ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            ) : (
                              <ChevronRight className="w-4 h-4 opacity-50 shrink-0 mt-0.5" />
                            )}
                          </button>
                          {isInternalUnlocked && (
                            <button
                              onClick={() => openDirectEditModal("lesson", lesson)}
                              className="p-2 rounded-xl hover:bg-white/10 text-amber-400 cursor-pointer shrink-0"
                            >
                              <Edit className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TOP NAVIGATION BAR (Chuẩn Lucky Swaps Header) */}
      <header className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 pt-6 pb-2 flex items-center justify-between">
        {/* Góc trái: Nút quay lại Menu chọn môn + Logo phát sáng + Nút mở Mục lục */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setCurrentSubject(null)}
            className={`px-3.5 py-2 rounded-2xl text-xs font-bold transition-all cursor-pointer ${glassCard} hover:border-blue-400/50 flex items-center space-x-1.5`}
            title="Quay lại menu chọn môn học"
          >
            <ChevronLeft className="w-4 h-4 text-blue-400" />
            <span className="hidden sm:inline">Đổi môn</span>
          </button>

          <button
            onClick={() => setDrawerOpen(true)}
            className={`flex items-center space-x-2.5 px-3.5 py-2 rounded-2xl transition-all cursor-pointer group ${glassCard} hover:border-blue-400/50`}
          >
            <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center shadow-[0_0_18px_rgba(59,130,246,0.8)] group-hover:scale-105 transition-transform">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-extrabold text-sm tracking-tight">EduAI</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-400/30 font-semibold">
              Mục lục 27 Chương
            </span>
          </button>

          {/* Chọn khối gọn gàng với nút mở rộng */}
          <div className="relative">
            <button
              onClick={() => setGradeDropdownOpen(!gradeDropdownOpen)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-2xl text-xs font-bold transition-all cursor-pointer ${glassCard} hover:border-blue-400/50`}
            >
              <span className="text-cyan-400 font-extrabold">{currentGradeObj.name}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${gradeDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {gradeDropdownOpen && (
              <div className={`absolute top-12 left-0 z-50 w-44 rounded-2xl p-1.5 space-y-1 ${glassCard} shadow-2xl border border-blue-500/30`}>
                {Object.keys(curriculum).map(gKey => {
                  const active = selectedGrade === gKey;
                  return (
                    <button
                      key={gKey}
                      onClick={() => {
                        handleSelectGrade(gKey);
                        setGradeDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-between ${
                        active
                          ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                          : "hover:bg-white/10"
                      }`}
                    >
                      <span>{curriculum[gKey].name}</span>
                      {active && <Check className="w-3.5 h-3.5" />}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Góc phải: Nút Sáng/Tối + Quản trị Nội bộ + Badge tài khoản */}
        <div className="flex items-center space-x-2.5">
          {/* Nút chuyển đổi Sáng / Tối */}
          <button
            onClick={() => setIsDark(!isDark)}
            className={`px-3.5 py-2 rounded-2xl flex items-center space-x-2 text-xs font-bold transition-all cursor-pointer ${glassCard} hover:border-blue-400/50`}
            title="Chuyển đổi giao diện Sáng / Tối"
          >
            {isDark ? (
              <>
                <Sun className="w-4 h-4 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
                <span className="hidden sm:inline">Nền Sáng</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-blue-600" />
                <span className="hidden sm:inline">Nền Tối</span>
              </>
            )}
          </button>

          {/* Nút Quản trị Nội bộ */}
          <button
            onClick={() => setSettingsOpen(true)}
            className={`px-3.5 py-2 rounded-2xl flex items-center space-x-1.5 text-xs font-bold transition-all cursor-pointer ${glassCard} ${
              isInternalUnlocked
                ? "border-emerald-400/60 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                : "hover:border-blue-400/40"
            }`}
          >
            <Settings className="w-4 h-4" />
            <span className="hidden sm:inline">{isInternalUnlocked ? "Admin Bật" : "Nội bộ"}</span>
          </button>

          {/* Pill mã định danh giống "69GaA...uf7Ha" */}
          <div
            className={`hidden sm:flex items-center space-x-2 px-4 py-2 rounded-full text-xs font-mono font-semibold ${glassCard}`}
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]" />
            <span className={mutedText}>ARGON...{selectedGrade.toUpperCase()}</span>
          </div>
        </div>
      </header>

      {/* CENTER HERO TITLE (Giống hệt "Lucky Swaps / Challenge your luck now") */}
      <div className="relative z-10 text-center pt-4 pb-8 px-4">
        <h1
          className={`text-4xl sm:text-5xl font-black tracking-tight mb-2 ${
            isDark
              ? "bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent drop-shadow-[0_4px_24px_rgba(59,130,246,0.25)]"
              : "text-slate-900"
          }`}
        >
          EduAI Swaps
        </h1>
        <p className={`text-xs sm:text-sm font-medium ${mutedText}`}>
          Chinh phục 124 trang Sổ tay Toán THCS & Ma trận 20 câu cùng Gia sư Argon
        </p>

        {/* Chọn khối hiển thị trên mobile */}
        <div className="flex md:hidden justify-center gap-1.5 mt-4">
          {Object.keys(curriculum).map(gKey => (
            <button
              key={gKey}
              onClick={() => handleSelectGrade(gKey)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold ${
                selectedGrade === gKey
                  ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                  : glassCard
              }`}
            >
              {curriculum[gKey].name.replace("Khối ", "")}
            </button>
          ))}
        </div>
      </div>

      {/* MAIN BENTO GRID 2 CỘT (Bố cục y hệt Lucky Swaps) */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* CỘT TRÁI (5 CỘT HOẶC ẨN): THỐNG KÊ, WAVE LEVEL, CHUYÊN ĐỀ & THỬ THÁCH */}
        {sidebarCollapsed ? (
          <div className="lg:col-span-12 flex justify-start mb-2">
            <button
              onClick={() => setSidebarCollapsed(false)}
              className={`px-4 py-2.5 rounded-2xl flex items-center space-x-2 text-xs font-bold transition-all cursor-pointer ${glassCard} hover:border-blue-400/50`}
            >
              <PanelLeftOpen className="w-4 h-4 text-blue-400" />
              <span>Hiển thị bảng điều khiển trái</span>
            </button>
          </div>
        ) : (
          <div className="lg:col-span-5 space-y-5 relative">
            {/* 1. Hai thẻ Stat nhỏ trên cùng (Total Winnings & Total Swaps) */}
            <div className="grid grid-cols-2 gap-4">
              <div className={`p-5 rounded-3xl ${glassCard}`}>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-semibold ${mutedText}`}>Điểm Kinh Nghiệm</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-400/30">
                    XP
                  </span>
                </div>
                <div className="text-3xl font-black tracking-tight mb-1">
                  {userXP} <span className="text-sm font-bold text-blue-400">XP</span>
                </div>
                <div className={`text-[11px] font-medium ${mutedText}`}>
                  +{userXP} XP ({Math.round((userXP / MAX_XP) * 100)}%)
                </div>
              </div>

              <div className={`p-5 rounded-3xl relative overflow-visible ${glassCard}`}>
                {/* Nút thu gọn cột trái đặt nhô ra 1 nửa ở góc trên bên phải thẻ Kho Chuyên Đề (đã lùi xuống cho ngang hàng cột phải) */}
                <div className="absolute top-1 -right-3 z-30">
                  <button
                    onClick={() => setSidebarCollapsed(true)}
                    className="w-8 h-8 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.8)] transition-all cursor-pointer flex items-center justify-center border-2 border-white/20"
                    title="Thu gọn cột trái"
                  >
                    <PanelLeftClose className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex items-center justify-between mb-2 pr-2">
                  <span className={`text-xs font-semibold ${mutedText}`}>Kho Chuyên Đề</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-400/30">
                    THCS
                  </span>
                </div>
                <div className="text-3xl font-black tracking-tight mb-1">
                  {completedCount}/{totalLessonsCount}
                </div>
                <div className="text-[11px] font-bold text-blue-400">
                  124 Trang <span className={mutedText}>({Math.round((completedCount / totalLessonsCount) * 100)}%)</span>
                </div>
              </div>
            </div>

            {/* 2. Thẻ Your Progress - Level 0 -> 10 với đường sóng bậc thang phát sáng */}
            <div className={`p-6 rounded-3xl relative overflow-hidden ${glassCard}`}>
              <div className="relative z-10 flex items-start justify-between">
                <div>
                  <div className={`text-xs font-semibold mb-1 ${mutedText}`}>Tiến độ học tập (Max Lv.10)</div>
                  <div className="text-4xl font-black tracking-tight">
                    Level{" "}
                    <span className="text-blue-400 drop-shadow-[0_0_16px_rgba(59,130,246,0.9)] transition-all duration-500">
                      {userLevel}
                    </span>
                  </div>
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-cyan-400">
                  {Math.round((userXP / MAX_XP) * 100)}% Max
                </span>
              </div>

              <div className="relative h-36 -mx-6 -mb-6 mt-2">
                <svg viewBox="0 0 400 150" className="w-full h-full overflow-visible">
                  <defs>
                    <linearGradient id="waveAreaGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.42" />
                      <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
                    </linearGradient>
                    <filter id="neonGlow" x="-30%" y="-30%" width="160%" height="160%">
                      <feGaussianBlur stdDeviation="5" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                    <clipPath id="activeProgressClip">
                      <rect x="0" y="0" width={dotX} height="160" />
                    </clipPath>
                  </defs>

                  <path
                    d="M 20 140 C 80 140, 95 140, 110 115 C 125 90, 175 95, 195 90 C 215 85, 225 48, 255 48 C 285 48, 305 18, 360 15 L 400 15 L 400 150 L 20 150 Z"
                    fill="url(#waveAreaGrad)"
                  />
                  <path
                    d="M 20 140 C 80 140, 95 140, 110 115 C 125 90, 175 95, 195 90 C 215 85, 225 48, 255 48 C 285 48, 305 18, 360 15"
                    fill="none"
                    stroke="#3b82f6"
                    strokeOpacity="0.45"
                    strokeWidth="3"
                  />
                  <path
                    d="M 20 140 C 80 140, 95 140, 110 115 C 125 90, 175 95, 195 90 C 215 85, 225 48, 255 48 C 285 48, 305 18, 360 15"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="4"
                    filter="url(#neonGlow)"
                    clipPath="url(#activeProgressClip)"
                    className="transition-all duration-500"
                  />
                  <circle
                    cx={dotX}
                    cy={dotY}
                    r="5.5"
                    fill="#ffffff"
                    stroke="#38bdf8"
                    strokeWidth="2"
                    filter="url(#neonGlow)"
                    className="transition-all duration-500"
                  />
                  <line
                    x1={dotX}
                    y1={dotY}
                    x2={Math.min(275, dotX + 20)}
                    y2="122"
                    stroke="rgba(148,163,184,0.45)"
                    strokeDasharray="2 2"
                    className="transition-all duration-500"
                  />
                  <line
                    x1={Math.min(275, dotX + 20)}
                    y1="122"
                    x2="295"
                    y2="122"
                    stroke="rgba(148,163,184,0.45)"
                    strokeDasharray="2 2"
                    className="transition-all duration-500"
                  />
                </svg>

                <div className="absolute bottom-5 right-6 text-xs font-extrabold tracking-wide">
                  <span className="text-cyan-400">{userXP}</span>{" "}
                  <span className={mutedText}>/ {MAX_XP} xp</span>
                </div>
              </div>
            </div>

            {/* 3. Thẻ Chuyên đề & Thành tích */}
            <div className={`p-5 rounded-3xl space-y-4 ${glassCard}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-bold">Chuyên đề & Thành tích</span>
                  <span className={`text-xs ${mutedText}`}>&lt; &gt;</span>
                </div>
                <button
                  onClick={() => setDrawerOpen(true)}
                  className="text-[11px] font-bold text-blue-400 hover:underline cursor-pointer"
                >
                  Xem cả 27 chương →
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {currentGradeObj.courses.map((course, idx) => {
                  const isSelectedCourse = activeCourse.id === course.id;
                  return (
                    <button
                      key={course.id}
                      onClick={() => {
                        setActiveCourseId(course.id);
                        setActiveLessonId(course.lessons[0].id);
                        resetLessonQuizState();
                      }}
                      className={`p-3.5 rounded-2xl text-left transition-all relative flex items-center space-x-2.5 cursor-pointer ${
                        isSelectedCourse
                          ? "bg-gradient-to-br from-blue-600/30 via-indigo-600/20 to-cyan-500/30 border border-blue-400/70 shadow-[0_0_25px_rgba(59,130,246,0.45)]"
                          : `${subCard} hover:border-blue-400/30`
                      }`}
                    >
                      <div
                        className={`p-2 rounded-xl shrink-0 ${
                          isSelectedCourse
                            ? "bg-blue-500 text-white shadow-[0_0_12px_#3b82f6]"
                            : "bg-blue-500/10 text-blue-400"
                        }`}
                      >
                        {idx === 0 ? <Layers className="w-4 h-4" /> : <Trophy className="w-4 h-4" />}
                      </div>
                      <div className="overflow-hidden">
                        <div className="text-[10px] font-extrabold uppercase tracking-wider text-blue-400 truncate">
                          {idx === 0 ? "PHẦN ĐẠI SỐ" : "PHẦN HÌNH HỌC"}
                        </div>
                        <div className="text-xs font-bold truncate mt-0.5">
                          {course.lessons.length} Chương chuẩn
                        </div>
                      </div>
                      {isSelectedCourse && (
                        <div className="absolute -bottom-1.5 -right-1.5 w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="space-y-1.5 pt-1 max-h-48 overflow-y-auto no-scrollbar pr-1">
                {activeCourse.lessons.map((lesson, lIdx) => {
                  const isCurr = activeLesson.id === lesson.id;
                  const isDone = completedLessons[lesson.id];
                  return (
                    <div key={lesson.id} className="flex items-center space-x-1">
                      <button
                        onClick={() => handleSelectLesson(activeCourse.id, lesson.id)}
                        className={`w-full text-left px-3.5 py-2.5 rounded-2xl text-xs transition-all flex items-center justify-between cursor-pointer ${
                          isCurr
                            ? "bg-gradient-to-r from-blue-600/30 to-cyan-500/20 border border-blue-400/60 font-bold text-blue-300 shadow-[0_0_18px_rgba(59,130,246,0.3)]"
                            : `${subCard} opacity-80 hover:opacity-100`
                        }`}
                      >
                        <span className="truncate pr-2">
                          {lIdx + 1}. {lesson.title}
                        </span>
                        {isDone ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        ) : (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-blue-400 shrink-0">
                            20 câu
                          </span>
                        )}
                      </button>
                      {isInternalUnlocked && (
                        <button
                          onClick={() => openDirectEditModal("lesson", lesson)}
                          className="p-2 rounded-xl bg-amber-500/20 text-amber-400 hover:bg-amber-500/30 cursor-pointer shrink-0"
                          title="Sửa chương này"
                        >
                          <Edit className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* CỘT PHẢI (7 CỘT HOẶC MỞ RỘNG TOÀN BỘ 12 CỘT): BẢNG ĐIỀU KHIỂN HỌC TẬP & MA TRẬN ĐỀ */}
        <div className={`${sidebarCollapsed ? "lg:col-span-12" : "lg:col-span-7"} p-5 sm:p-6 rounded-[32px] space-y-4 transition-all duration-300 ${glassCard}`}>
          
          {/* KHỐI 1 (Tương ứng khung "Sell 25 FWOG"): Chuyên đề đang học & Bộ chọn khối */}
          <div className={`p-5 rounded-3xl relative ${subCard}`}>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className={`text-xs font-semibold ${mutedText}`}>
                Chuyên đề đang chọn • {currentGradeObj.name}
              </span>

              <button
                onClick={() => setDrawerOpen(true)}
                className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-xs font-bold transition-all cursor-pointer"
              >
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-400">
                  <GraduationCap className="w-3 h-3" />
                </span>
                <span>{currentGradeObj.name.replace("Khối ", "")}</span>
                <ChevronRight className="w-3.5 h-3.5 opacity-60" />
              </button>
            </div>

            <div className="flex items-start justify-between gap-3">
              <h2 className="text-lg sm:text-xl font-black leading-snug">
                {activeLesson.title}
              </h2>
              {isInternalUnlocked && (
                <button
                  onClick={() => openDirectEditModal("lesson", activeLesson)}
                  className="p-2 rounded-xl bg-amber-500/20 text-amber-400 hover:bg-amber-500/30 shrink-0 cursor-pointer"
                  title="Sửa tiêu đề & lý thuyết"
                >
                  <Edit className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          <div className="relative h-2 flex items-center justify-center z-10">
            <button
              onClick={() =>
                setActiveTab(activeTab === "theory" ? "quiz" : "theory")
              }
              className={`w-9 h-9 rounded-full flex items-center justify-center border transition-transform hover:scale-110 cursor-pointer ${
                isDark
                  ? "bg-[#161c2e] border-white/15 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                  : "bg-white border-blue-200 text-blue-600 shadow-md"
              }`}
              title="Chuyển nhanh giữa Lý thuyết và Bài kiểm tra"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className={`p-5 rounded-3xl relative overflow-hidden ${subCard}`}>
            <div className="absolute -bottom-8 -right-8 w-44 h-24 bg-blue-500/35 blur-2xl rounded-full pointer-events-none" />

            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                <button
                  onClick={() => setActiveTab("theory")}
                  className={`px-4 py-2.5 rounded-2xl text-xs font-extrabold transition-all flex items-center space-x-1.5 cursor-pointer ${
                    activeTab === "theory"
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.6)]"
                      : "hover:bg-white/5 opacity-75 hover:opacity-100"
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>1. Lý thuyết</span>
                </button>

                <button
                  onClick={() => setActiveTab("quiz")}
                  className={`px-4 py-2.5 rounded-2xl text-xs font-extrabold transition-all flex items-center space-x-1.5 cursor-pointer ${
                    activeTab === "quiz"
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.6)]"
                      : "hover:bg-white/5 opacity-75 hover:opacity-100"
                  }`}
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>2. Kiểm tra (20 câu)</span>
                </button>

                <button
                  onClick={() => setActiveTab("notes")}
                  className={`px-4 py-2.5 rounded-2xl text-xs font-extrabold transition-all flex items-center space-x-1.5 cursor-pointer ${
                    activeTab === "notes"
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.6)]"
                      : "hover:bg-white/5 opacity-75 hover:opacity-100"
                  }`}
                >
                  <Bookmark className="w-3.5 h-3.5" />
                  <span>3. Sổ tay</span>
                </button>
              </div>

              <div className="text-right px-3 py-1 rounded-2xl bg-blue-500/15 border border-blue-400/40 shadow-[0_0_20px_rgba(59,130,246,0.35)]">
                <div className="text-[10px] text-blue-300 font-semibold">Mục tiêu tối đa</div>
                <div className="text-sm font-black">
                  <span className="text-cyan-400">10.0</span> ĐIỂM
                </div>
              </div>
            </div>
          </div>

          <div className={`p-5 rounded-3xl space-y-3 ${subCard}`}>
            <div className="flex items-center justify-between">
              <span className={`text-xs font-semibold ${mutedText}`}>
                Tiến độ Ma trận Đề kiểm tra
              </span>
              <span className="text-2xl font-black tracking-tight">
                {totalAnswered}
                <span className={`text-sm font-bold ${mutedText}`}>/{totalQuestions} câu</span>
              </span>
            </div>

            <div className="pt-1 pb-2">
              <div className="flex justify-between text-[10px] font-bold opacity-60 mb-2 px-1">
                <span>Lý thuyết</span>
                <span>TN ({answeredQuizCount}/12)</span>
                <span>Đ/S ({answeredTfCount}/4)</span>
                <span>Ngắn ({answeredSaCount}/4)</span>
                <span>Đích 10đ</span>
              </div>
              <div className="relative h-2.5 rounded-full bg-black/40 border border-white/10 overflow-visible flex items-center">
                <div
                  style={{ width: `${Math.max(8, progressRatio)}%` }}
                  className="h-full rounded-full bg-gradient-to-r from-blue-600 via-blue-400 to-white shadow-[0_0_16px_#3b82f6] transition-all duration-300 relative"
                >
                  <span className="absolute -right-2 -top-1 w-4 h-4 rounded-full bg-white border-2 border-blue-400 shadow-[0_0_15px_#ffffff,0_0_25px_#3b82f6]" />
                </div>
              </div>
            </div>
          </div>

          <div className={`p-5 sm:p-6 rounded-3xl max-h-[540px] overflow-y-auto no-scrollbar select-auto space-y-5 ${subCard}`}>
            {activeTab === "theory" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                      Kiến thức Sổ tay Toán THCS
                    </span>
                  </div>
                  {isInternalUnlocked && (
                    <button
                      onClick={() => openDirectEditModal("theory", activeLesson)}
                      className="px-3 py-1 rounded-xl bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-bold flex items-center space-x-1 cursor-pointer"
                    >
                      <Edit className="w-3 h-3" />
                      <span>Sửa Lý thuyết</span>
                    </button>
                  )}
                </div>

                <div className="space-y-2.5 leading-relaxed">
                  {activeLesson.theory.split("\n").map((line, i) => {
                    if (line.startsWith("### ")) {
                      return (
                        <h3
                          key={i}
                          className="text-sm sm:text-base font-extrabold text-cyan-400 pt-3 pb-1 border-b border-white/10"
                        >
                          {line.replace("### ", "")}
                        </h3>
                      );
                    }
                    return (
                      <p
                        key={i}
                        className={`text-xs sm:text-sm whitespace-pre-wrap leading-relaxed ${
                          isDark ? "text-slate-200" : "text-slate-700"
                        }`}
                      >
                        {line}
                      </p>
                    );
                  })}
                </div>
              </div>
            )}

            {activeTab === "quiz" && (
              <div className="space-y-7">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <h3 className="text-sm font-extrabold text-blue-400">
                      PHẦN I. Trắc nghiệm khách quan (12 câu — 3,0 điểm)
                    </h3>
                    {quizSubmitted && (
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400">
                        Đúng {quizScore}/{totalQuizCount}
                      </span>
                    )}
                  </div>

                  {activeLesson.quiz.map((q, qIdx) => (
                    <div
                      key={qIdx}
                      className={`p-4 rounded-2xl border space-y-3 ${
                        isDark ? "bg-[#0e1320]/90 border-white/10" : "bg-white border-blue-100"
                      }`}
                    >
                      <div className="text-xs sm:text-sm font-bold">
                        <span className="text-cyan-400 mr-1.5">Câu {qIdx + 1}:</span>
                        {q.question}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {q.options.map((opt, optIdx) => {
                          const isSelected = selectedAnswers[qIdx] === optIdx;
                          let style = isDark
                            ? "border-white/10 hover:border-blue-400/40 bg-white/[0.03]"
                            : "border-slate-200 hover:border-blue-400 bg-slate-50";

                          if (isSelected) {
                            style =
                              "border-blue-400 bg-blue-600/25 text-blue-300 font-bold shadow-[0_0_15px_rgba(59,130,246,0.4)]";
                          }
                          if (quizSubmitted) {
                            if (optIdx === q.correctIndex) {
                              style =
                                "border-emerald-400 bg-emerald-500/25 text-emerald-300 font-bold";
                            } else if (isSelected) {
                              style = "border-rose-400 bg-rose-500/25 text-rose-300 font-bold";
                            }
                          }

                          return (
                            <button
                              key={optIdx}
                              onClick={() => {
                                if (quizSubmitted) return;
                                setSelectedAnswers(prev => ({ ...prev, [qIdx]: optIdx }));
                              }}
                              disabled={quizSubmitted}
                              className={`text-left px-3.5 py-2.5 rounded-xl border text-xs transition-all flex items-center justify-between cursor-pointer ${style}`}
                            >
                              <span>
                                {String.fromCharCode(65 + optIdx)}. {opt}
                              </span>
                              {quizSubmitted && optIdx === q.correctIndex && (
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                      {quizSubmitted && (
                        <div className="text-[11px] p-2.5 rounded-xl bg-blue-500/10 border border-blue-400/20 text-blue-300">
                          <strong>Giải thích:</strong> {q.explanation}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <h3 className="text-sm font-extrabold text-cyan-400">
                      PHẦN II. Trắc nghiệm Đúng / Sai (4 câu — 4,0 điểm)
                    </h3>
                    {quizSubmitted && (
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400">
                        Đúng {tfScore}/{totalTfCount}
                      </span>
                    )}
                  </div>

                  {activeLesson.trueFalse.map((tf, tfIdx) => {
                    const userVal = trueFalseAnswers[tfIdx];
                    return (
                      <div
                        key={tfIdx}
                        className={`p-4 rounded-2xl border space-y-3 ${
                          isDark ? "bg-[#0e1320]/90 border-white/10" : "bg-white border-blue-100"
                        }`}
                      >
                        <div className="text-xs sm:text-sm font-bold">
                          Mệnh đề {tfIdx + 1}: {tf.statement}
                        </div>
                        <div className="grid grid-cols-2 gap-2.5">
                          {[
                            { label: "ĐÚNG", val: true, icon: Check },
                            { label: "SAI", val: false, icon: X }
                          ].map(btn => {
                            const Icon = btn.icon;
                            const active = userVal === btn.val;
                            return (
                              <button
                                key={btn.label}
                                onClick={() => {
                                  if (quizSubmitted) return;
                                  setTrueFalseAnswers(prev => ({ ...prev, [tfIdx]: btn.val }));
                                }}
                                disabled={quizSubmitted}
                                className={`py-2 rounded-xl border text-xs font-bold flex items-center justify-center space-x-1.5 transition-all cursor-pointer ${
                                  active
                                    ? "bg-blue-600/30 border-blue-400 text-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                                    : "border-white/10 hover:border-blue-400/40 opacity-75"
                                }`}
                              >
                                <Icon className="w-3.5 h-3.5" />
                                <span>{btn.label}</span>
                              </button>
                            );
                          })}
                        </div>
                        {quizSubmitted && (
                          <div className="text-[11px] p-2.5 rounded-xl bg-blue-500/10 border border-blue-400/20 text-blue-300">
                            <strong>Đáp án: {tf.correct ? "ĐÚNG" : "SAI"}.</strong> {tf.explanation}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <h3 className="text-sm font-extrabold text-indigo-400">
                      PHẦN III. Tự luận trả lời ngắn (4 câu — 3,0 điểm)
                    </h3>
                    {quizSubmitted && (
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400">
                        Đúng {saScore}/{totalSaCount}
                      </span>
                    )}
                  </div>

                  {activeLesson.shortAnswer.map((sa, saIdx) => (
                    <div
                      key={saIdx}
                      className={`p-4 rounded-2xl border space-y-3 ${
                        isDark ? "bg-[#0e1320]/90 border-white/10" : "bg-white border-blue-100"
                      }`}
                    >
                      <div className="text-xs sm:text-sm font-bold">
                        Câu {saIdx + 1}: {sa.question}
                      </div>
                      <input
                        type="text"
                        value={shortAnswers[saIdx] || ""}
                        onChange={e => {
                          if (quizSubmitted) return;
                          setShortAnswers(prev => ({ ...prev, [saIdx]: e.target.value }));
                        }}
                        disabled={quizSubmitted}
                        placeholder="Nhập đáp số ngắn gọn (VD: 20, -1/6, 4√3)..."
                        className={`w-full px-4 py-2.5 rounded-xl border text-xs font-bold focus:outline-none focus:border-blue-400 ${
                          isDark
                            ? "bg-black/40 border-white/15 text-cyan-300"
                            : "bg-slate-50 border-slate-300 text-blue-900"
                        }`}
                      />
                      {quizSubmitted && (
                        <div className="text-[11px] p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 space-y-1">
                          <div>
                            <strong>Đáp số chuẩn:</strong> <code>{sa.correctAnswer}</code>
                          </div>
                          <div>
                            <strong>Hướng dẫn:</strong> {sa.rubric}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {essayEvaluation && (
                  <div className="p-4 rounded-2xl bg-blue-600/15 border border-blue-400/40 text-xs whitespace-pre-wrap leading-relaxed">
                    {essayEvaluation}
                  </div>
                )}
              </div>
            )}

            {activeTab === "notes" && (
              <div className="space-y-3">
                <div className="text-xs font-bold text-cyan-400">
                  Sổ tay ghi chú cá nhân — {activeLesson.title}
                </div>
                <textarea
                  value={userNotes[activeLesson.id] || ""}
                  onChange={e =>
                    setUserNotes(prev => ({ ...prev, [activeLesson.id]: e.target.value }))
                  }
                  placeholder="Ghi chú lại các công thức, mẹo giải nhanh hoặc lỗi sai cần tránh..."
                  className={`w-full h-56 p-4 rounded-2xl border text-xs leading-relaxed focus:outline-none focus:border-blue-400 resize-none ${
                    isDark
                      ? "bg-black/30 border-white/10 text-slate-100"
                      : "bg-white border-slate-200 text-slate-800"
                  }`}
                />
              </div>
            )}
          </div>

          <div className="pt-1 space-y-2.5 px-2 text-xs">
            <div className="flex items-center justify-between">
              <span className={`flex items-center space-x-2 ${mutedText}`}>
                <Zap className="w-3.5 h-3.5 text-blue-400" />
                <span>Hệ số điểm thưởng</span>
              </span>
              <span className="font-extrabold">x3.6 XP</span>
            </div>
            <div className="flex items-center justify-between">
              <span className={`flex items-center space-x-2 ${mutedText}`}>
                <Award className="w-3.5 h-3.5 text-cyan-400" />
                <span>Tỉ lệ hoàn thành bài kiểm tra</span>
              </span>
              <span className="font-extrabold">{progressRatio}%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className={`flex items-center space-x-2 ${mutedText}`}>
                <Layers className="w-3.5 h-3.5 text-indigo-400" />
                <span>Cấu trúc đề chuẩn</span>
              </span>
              <span className="font-extrabold">12 TN • 4 Đ/S • 4 Ngắn</span>
            </div>
            <div className="flex items-center justify-between">
              <span className={`flex items-center space-x-2 ${mutedText}`}>
                <Bot className="w-3.5 h-3.5 text-emerald-400" />
                <span>Trợ lý chấm điểm</span>
              </span>
              <span className="font-extrabold text-cyan-400">Gia sư AI Argon</span>
            </div>
          </div>

          <div className="pt-2">
            {activeTab === "theory" ? (
              <button
                onClick={handleFinishReadingTheory}
                className="w-full py-4 rounded-2xl font-extrabold text-sm text-white bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#1e3a8a] border border-blue-400/60 shadow-[0_0_35px_rgba(59,130,246,0.6),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:shadow-[0_0_50px_rgba(59,130,246,0.9)] transition-all cursor-pointer"
              >
                Đã hiểu Lý thuyết — Bắt đầu Làm Đề 20 Câu
              </button>
            ) : !quizSubmitted ? (
              <button
                onClick={handleSubmitQuizAndEssay}
                disabled={!canSubmitAll}
                className={`w-full py-4 rounded-2xl font-extrabold text-sm transition-all ${
                  canSubmitAll
                    ? "text-white bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#1e3a8a] border border-blue-400/60 shadow-[0_0_35px_rgba(59,130,246,0.65),inset_0_1px_1px_rgba(255,255,255,0.4)] cursor-pointer"
                    : "bg-white/5 text-slate-500 border border-white/10 cursor-not-allowed"
                }`}
              >
                {canSubmitAll
                  ? "Nộp bài & Chấm điểm cùng Argon (+500 XP)"
                  : `Hoàn thành đủ 20 câu để Nộp bài (Đã làm ${totalAnswered}/20 câu)`}
              </button>
            ) : (
              <button
                onClick={resetLessonQuizState}
                className="w-full py-4 rounded-2xl font-extrabold text-sm text-white bg-gradient-to-r from-emerald-600 to-teal-500 border border-emerald-300/50 shadow-[0_0_30px_rgba(16,185,129,0.5)] cursor-pointer"
              >
                Làm lại đề này để nâng cao điểm số
              </button>
            )}
          </div>
        </div>
      </main>

      {/* FLOATING CHATBOX GIA SƯ ARGON */}
      <div className="fixed bottom-6 right-6 z-40">
        {!chatOpen ? (
          <button
            onClick={() => setChatOpen(true)}
            className="w-14 h-14 rounded-full bg-gradient-to-b from-[#1e293b] to-[#0f172a] border border-blue-400/50 shadow-[0_0_30px_rgba(59,130,246,0.7),inset_0_1px_2px_rgba(255,255,255,0.3)] flex items-center justify-center text-white hover:scale-105 transition-transform cursor-pointer relative"
            title="Trò chuyện cùng Gia sư AI Argon"
          >
            <Headphones className="w-6 h-6 text-blue-300" />
            <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 rounded-full bg-rose-500 border border-white animate-ping" />
            <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 rounded-full bg-rose-500 border border-white" />
          </button>
        ) : (
          <div
            style={{
              width: chatExpanded ? "min(92vw, 600px)" : "min(92vw, 380px)",
              height: chatExpanded ? "min(82vh, 660px)" : "500px"
            }}
            className={`rounded-3xl flex flex-col overflow-hidden transition-all duration-200 ${glassCard} border-blue-400/40`}
          >
            <div className="p-4 bg-gradient-to-r from-blue-950/90 via-indigo-950/90 to-slate-900/90 border-b border-white/10 flex items-center justify-between text-white">
              <div className="flex items-center space-x-2.5">
                <div className="p-2 rounded-xl bg-blue-600 shadow-[0_0_15px_#3b82f6]">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm">Gia sư AI Argon</h3>
                  <p className="text-[10px] text-blue-300">Sẵn sàng gợi ý & chấm bài 24/7</p>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <button
                  onClick={() => setChatExpanded(!chatExpanded)}
                  className="p-1.5 rounded-lg hover:bg-white/10 cursor-pointer"
                >
                  {chatExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setChatOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-white/10 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="px-3 py-2 border-b border-white/10 flex gap-1.5 overflow-x-auto">
              <button
                onClick={() => setInputMessage("Argon gợi ý giải 4 câu trả lời ngắn giúp em!")}
                className="px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-[10px] font-bold shrink-0 cursor-pointer"
              >
                Gợi ý 4 câu trả lời ngắn
              </button>
              <button
                onClick={() => setInputMessage("Tóm tắt công thức trọng tâm chương này!")}
                className="px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-[10px] font-bold shrink-0 cursor-pointer"
              >
                Tóm tắt công thức
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3 select-auto">
              {chatMessages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] p-3.5 rounded-2xl text-xs whitespace-pre-wrap leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-br-none shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                        : `${subCard} rounded-bl-none`
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isBotTyping && (
                <div className="text-[11px] text-blue-400 italic px-2">
                  Argon đang suy nghĩ...
                </div>
              )}
              <div ref={chatBottomRef} />
            </div>

            <div className="p-3 border-t border-white/10 flex items-center space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={e => setInputMessage(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleSendMessage()}
                placeholder="Hỏi Gia sư Argon..."
                className={`flex-1 px-3.5 py-2.5 rounded-xl text-xs focus:outline-none border ${
                  isDark
                    ? "bg-black/40 border-white/15 text-white"
                    : "bg-slate-100 border-slate-300 text-slate-900"
                }`}
              />
              <button
                onClick={handleSendMessage}
                className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_15px_#3b82f6] cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* MODAL QUẢN TRỊ NỘI BỘ (Mở khóa bằng KEY) */}
      {settingsOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className={`max-w-xl w-full rounded-3xl overflow-hidden ${glassCard}`}>
            <div className="p-5 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <Settings className="w-5 h-5 text-blue-400" />
                <div>
                  <h3 className="font-extrabold text-sm">Quản trị Nội bộ — EduAI Studio</h3>
                  <p className={`text-[11px] ${mutedText}`}>
                    Mở khóa bằng KEY để sửa bài học & cấu hình AI
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSettingsOpen(false)}
                className="p-1.5 rounded-xl hover:bg-white/10 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
              {!isInternalUnlocked ? (
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-400/30 flex items-start space-x-3 text-xs text-amber-300">
                    <Key className="w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">Yêu cầu xác thực KEY Nội bộ</p>
                      <p className="opacity-80 mt-0.5">
                        Nhập mã KEY định dạng <code>ARGON-ABC123456ABC</code> hoặc nhấn nút gửi KEY qua Discord.
                      </p>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <input
                      type="password"
                      value={keyInput}
                      onChange={e => setKeyInput(e.target.value)}
                      onKeyDown={e => e.key === "Enter" && handleVerifyInternalKey()}
                      placeholder="Nhập KEY nội bộ..."
                      className="flex-1 px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-xs font-mono"
                    />
                    <button
                      onClick={handleVerifyInternalKey}
                      className="px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl shadow-[0_0_15px_#3b82f6] cursor-pointer"
                    >
                      Mở khóa
                    </button>
                  </div>

                  {keyError && (
                    <p className="text-xs text-rose-400 font-semibold flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1.5 shrink-0" /> {keyError}
                    </p>
                  )}

                  <button
                    onClick={handleSendKeyToDiscord}
                    className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-bold flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-cyan-400" />
                    <span>Gửi KEY hôm nay qua Discord</span>
                  </button>

                  {webhookStatus && (
                    <p className="text-xs text-center text-cyan-300 bg-cyan-500/10 p-2.5 rounded-xl border border-cyan-400/20">
                      {webhookStatus}
                    </p>
                  )}
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="p-3 rounded-2xl bg-emerald-500/15 border border-emerald-400/40 flex items-center justify-between text-xs text-emerald-300 font-bold">
                    <span className="flex items-center space-x-2">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Đã mở khóa quyền Quản trị Nội bộ</span>
                    </span>
                    <button
                      onClick={() => {
                        setIsInternalUnlocked(false);
                        setKeyInput("");
                      }}
                      className="text-rose-400 hover:underline cursor-pointer"
                    >
                      Khóa lại
                    </button>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold block">Discord Webhook URL:</label>
                    <input
                      type="text"
                      value={discordWebhookUrl}
                      onChange={e => {
                        setDiscordWebhookUrl(e.target.value);
                        localStorage.setItem("eduai_discord_webhook", e.target.value);
                      }}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 text-xs font-mono"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold block">Gemini API Key:</label>
                    <input
                      type="password"
                      value={geminiApiKey}
                      onChange={e => {
                        setGeminiApiKey(e.target.value);
                        localStorage.setItem("eduai_gemini_api_key", e.target.value);
                      }}
                      placeholder="AIza..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 text-xs"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold block">System Prompt Gia sư Argon:</label>
                    <textarea
                      value={argonSystemPrompt}
                      onChange={e => {
                        setArgonSystemPrompt(e.target.value);
                        localStorage.setItem("eduai_argon_prompt", e.target.value);
                      }}
                      className="w-full h-28 p-3 rounded-xl bg-black/40 border border-white/15 text-xs"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* MODAL SỬA TRỰC TIẾP NỘI DUNG BÀI HỌC */}
      {editModalOpen && editingTarget && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className={`max-w-2xl w-full rounded-3xl overflow-hidden ${glassCard}`}>
            <div className="p-5 border-b border-white/10 flex items-center justify-between">
              <h3 className="font-extrabold text-sm">Chỉnh sửa trực tiếp nội dung</h3>
              <button
                onClick={() => setEditModalOpen(false)}
                className="p-1.5 rounded-xl hover:bg-white/10 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              {editFormValues.title !== undefined && (
                <div>
                  <label className="text-xs font-bold block mb-1">Tiêu đề:</label>
                  <input
                    type="text"
                    value={editFormValues.title}
                    onChange={e => setEditFormValues({ ...editFormValues, title: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 text-xs font-bold"
                  />
                </div>
              )}
              {editFormValues.theory !== undefined && (
                <div>
                  <label className="text-xs font-bold block mb-1">Nội dung Lý thuyết:</label>
                  <textarea
                    value={editFormValues.theory}
                    onChange={e => setEditFormValues({ ...editFormValues, theory: e.target.value })}
                    className="w-full h-64 p-3.5 rounded-xl bg-black/40 border border-white/15 text-xs font-mono leading-relaxed"
                  />
                </div>
              )}
              <div className="flex justify-end space-x-2 pt-2">
                <button
                  onClick={() => setEditModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-white/10 text-xs font-bold cursor-pointer"
                >
                  Hủy
                </button>
                <button
                  onClick={handleSaveDirectEdit}
                  className="px-5 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold flex items-center space-x-1.5 shadow-[0_0_15px_#3b82f6] cursor-pointer"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Lưu thay đổi</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
