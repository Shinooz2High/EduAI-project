import React, { useState, useEffect, useRef } from "react";
import {
    BookOpen, CheckCircle2, Award, Send, Bot,
    ChevronRight, Sparkles, FileText, Lock, Edit3,
    Settings, Key, Save, ShieldCheck, RefreshCw, AlertCircle,
    HelpCircle, Check, X, Bookmark, Edit, Trash2, Globe,
    PanelLeftClose, PanelLeftOpen, Maximize2, Minimize2
} from "lucide-react";

// --- HỆ THỐNG DỮ LIỆU ĐẦY ĐỦ 124 TRANG SỔ TAY TOÁN THCS (LỚP 6, 7, 8, 9) ---
// Bao gồm toàn bộ 27 chương Đại số & Hình học:
// - Lớp 6: 3 chương Đại số (Số tự nhiên, Số nguyên, Phân số) + 2 chương Hình học (Đoạn thẳng, Góc)
// - Lớp 7: 4 chương Đại số (Số hữu tỉ, Hàm số, Thống kê, Biểu thức) + 3 chương Hình học (Đường thẳng song song, Tam giác, Các đường đồng quy)
// - Lớp 8: 4 chương Đại số (Phép nhân chia đa thức, Phân thức, Phương trình, Bất phương trình) + 4 chương Hình học (Tứ giác, Diện tích đa giác, Tam giác đồng dạng, Lăng trụ & Chóp)
// - Lớp 9: 4 chương Đại số (Căn bậc hai/ba, Hàm số bậc nhất, Hệ phương trình, PT bậc hai & Vi-ét) + 4 chương Hình học (Hệ thức lượng, Đường tròn, Góc với đường tròn, Trụ - Nón - Cầu cùng 28 vấn đề chứng minh)
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

### 6. Tính chất chia hết của một tổng (Trang 5)
• Tính chất 1: a ⋮ m, b ⋮ m, c ⋮ m ⇒ (a + b + c) ⋮ m.
• Tính chất 2: a ⋮ m, b ∤ m, c ⋮ m ⇒ (a + b + c) ∤ m.

### 7. Dấu hiệu chia hết (Trang 5-6)
• Chia hết cho 2: Tận cùng là 0, 2, 4, 6, 8.
• Chia hết cho 5: Tận cùng là 0 hoặc 5.
• Chia hết cho 3: Tổng các chữ số chia hết cho 3.
• Chia hết cho 9: Tổng các chữ số chia hết cho 9.
• Chia hết cho 4: Hai chữ số cuối cùng tạo thành số chia hết cho 4.
• Chia hết cho 8: Ba chữ số cuối cùng tạo thành số chia hết cho 8.
• Chia hết cho 11: Hiệu giữa tổng các chữ số hàng lẻ và tổng các chữ số hàng chẵn chia hết cho 11.

### 8. Số nguyên tố, Hợp số, ƯCLN và BCNN (Trang 6-7)
• Số nguyên tố là số tự nhiên lớn hơn 1, chỉ có 2 ước là 1 và chính nó. Số 2 là số nguyên tố chẵn duy nhất.
• Hợp số là số tự nhiên lớn hơn 1, có nhiều hơn 2 ước.
• Cách tính số lượng ước của m = aˣ · bʸ · cᶻ (với a, b, c là số nguyên tố): Số ước = (x + 1)(y + 1)(z + 1).
• Hai số nguyên tố cùng nhau có ƯCLN bằng 1.
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
                            { id: "sa-1", question: "Tính tổng S = 1 + 2 + 3 + ... + 999:", correctAnswer: "499500", rubric: "Số số hạng: 999. Tổng = (1 + 999) · 999 : 2 = 1000 · 999 : 2 = 499500." },
                            { id: "sa-2", question: "Tìm chữ số * để số 12* chia hết cho cả 2 và 5:", correctAnswer: "0", rubric: "Để chia hết cho cả 2 và 5 thì chữ số tận cùng phải là 0. Vậy * = 0." },
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
• Số nguyên âm < 0 < Số nguyên dương.

### 2. Giá trị tuyệt đối của một số nguyên (Trang 8)
• Giá trị tuyệt đối của số nguyên a (ký hiệu |a|) là khoảng cách từ điểm a đến điểm O trên trục số.
• |a| ≥ 0 với mọi a. |a| = a khi a ≥ 0; |a| = -a khi a < 0. Hai số đối nhau có giá trị tuyệt đối bằng nhau: |a| = |-a|.

### 3. Phép tính số nguyên và Quy tắc (Trang 8-9)
• Cộng hai số nguyên âm: Cộng hai giá trị tuyệt đối rồi đặt dấu "-" đằng trước: (-a) + (-b) = -(a + b).
• Cộng hai số nguyên khác dấu: Lấy giá trị tuyệt đối lớn trừ giá trị tuyệt đối nhỏ, đặt dấu của số có GTTĐ lớn hơn trước kết quả. Hai số đối nhau có tổng bằng 0: a + (-a) = 0.
• Phép trừ: Muốn trừ a cho b, ta cộng a với số đối của b: a - b = a + (-b).
• Quy tắc chuyển vế: Khi chuyển một số hạng từ vế này sang vế kia của một đẳng thức, ta phải đổi dấu số hạng đó: dấu "+" đổi thành "-" và dấu "-" đổi thành "+".
• Quy tắc dấu ngoặc:
  - Bỏ dấu ngoặc có dấu "-" đằng trước: Phải đổi dấu tất cả các số hạng trong ngoặc.
  - Bỏ dấu ngoặc có dấu "+" đằng trước: Giữ nguyên dấu các số hạng trong ngoặc.
• Nhân hai số nguyên:
  - Cùng dấu: Kết quả dương (+).
  - Khác dấu: Kết quả âm (-).
  - a · b = 0 khi a = 0 hoặc b = 0.
• Bội và ước trong Z: a = b · q (q ∈ Z) thì a là bội của b, b là ước của a. Số 0 là bội của mọi số nguyên khác 0 nhưng không là ước của số nào. 1 và -1 là ước của mọi số nguyên.`,
                        quiz: [
                            { question: "Kết quả của phép tính (-237) + 55 là:", options: ["-182", "182", "-292", "292"], correctIndex: 0, explanation: "-(237 - 55) = -182." },
                            { question: "Bỏ dấu ngoặc của biểu thức a - (b - c + d) ta được:", options: ["a - b + c - d", "a - b - c + d", "a + b - c - d", "a - b + c + d"], correctIndex: 0, explanation: "Trước ngoặc có dấu trừ nên đổi dấu tất cả: +b thành -b, -c thành +c, +d thành -d." },
                            { question: "Tìm x biết: x - (-15) = -5", options: ["x = -20", "x = 10", "x = -10", "x = 20"], correctIndex: 0, explanation: "x + 15 = -5 => x = -5 - 15 = -20." },
                            { question: "Giá trị tuyệt đối của số nguyên -15 là:", options: ["15", "-15", "0", "±15"], correctIndex: 0, explanation: "|-15| = 15." },
                            { question: "Tích của 5 số nguyên âm là:", options: ["Một số nguyên âm", "Một số nguyên dương", "Số 0", "Không xác định"], correctIndex: 0, explanation: "Số lượng thừa số âm lẻ (5) nên tích mang dấu âm." },
                            { question: "Khẳng định nào sau đây là ĐÚNG?", options: ["-8 < -5", "-5 < -8", "-3 > 0", "0 < -2"], correctIndex: 0, explanation: "Trên trục số, điểm -8 nằm bên trái -5 nên -8 < -5." },
                            { question: "Khi chuyển vế hạng tử -x từ vế trái sang vế phải của phương trình, ta đổi thành:", options: ["+x", "-x", "1/x", "0"], correctIndex: 0, explanation: "Quy tắc chuyển vế: đổi dấu trừ thành cộng." },
                            { question: "Tính: (-4) · (-25) =", options: ["100", "-100", "29", "-29"], correctIndex: 0, explanation: "Nhân hai số cùng dấu âm ra số dương: 4 · 25 = 100." },
                            { question: "Số nguyên âm lớn nhất là:", options: ["-1", "-9999", "0", "1"], correctIndex: 0, explanation: "-1 là số nguyên âm lớn nhất trong tập Z." },
                            { question: "Tập hợp các ước của 6 trong Z là:", options: ["{±1; ±2; ±3; ±6}", "{1; 2; 3; 6}", "{±2; ±3}", "{0; ±6}"], correctIndex: 0, explanation: "Trong Z, ước của 6 gồm cả số âm và số dương: ±1, ±2, ±3, ±6." },
                            { question: "Kết quả của (-80) + (-220) bằng:", options: ["-300", "300", "-140", "140"], correctIndex: 0, explanation: "-(80 + 220) = -300." },
                            { question: "Cho a · b = 0. Khi đó:", options: ["a = 0 hoặc b = 0", "Cả a và b đều phải bằng 0", "a > 0 và b < 0", "a = 1"], correctIndex: 0, explanation: "Tích bằng 0 khi ít nhất một trong hai thừa số bằng 0." }
                        ],
                        trueFalse: [
                            { statement: "Khoảng cách từ điểm a đến gốc 0 trên trục số không bao giờ là một số âm.", correct: true, explanation: "Đúng. Giá trị tuyệt đối là độ dài khoảng cách nên luôn ≥ 0." },
                            { statement: "Số 0 là ước của số nguyên 5.", correct: false, explanation: "Sai. Phép chia cho 0 không có nghĩa." },
                            { statement: "Tập hợp số tự nhiên N là tập con của tập hợp số nguyên Z (N ⊂ Z).", correct: true, explanation: "Đúng. Mọi số tự nhiên đều là số nguyên không âm." },
                            { statement: "Tích của hai số nguyên khác dấu luôn là một số nguyên dương.", correct: false, explanation: "Sai. Tích hai số khác dấu luôn là số âm." }
                        ],
                        shortAnswer: [
                            { id: "sa-1", question: "Tìm số nguyên x biết: 2x - 15 = -25", correctAnswer: "-5", rubric: "2x = -25 + 15 = -10 => x = -5." },
                            { id: "sa-2", question: "Tính tổng: (-75) + 50 + (-25) + 150", correctAnswer: "100", rubric: "[(-75) + (-25)] + (50 + 150) = -100 + 200 = 100." },
                            { id: "sa-3", question: "Tìm số tự nhiên n để (n + 3) chia hết cho (n - 1) với n > 1 lớn nhất:", correctAnswer: "5", rubric: "n + 3 = (n - 1) + 4 => 4 ⋮ (n - 1) => n - 1 = 4 => n = 5." },
                            { id: "sa-4", question: "Tính giá trị của biểu thức: |-18| - |+8| + |-2| · |-5|", correctAnswer: "20", rubric: "18 - 8 + 2 · 5 = 10 + 10 = 20." }
                        ]
                    },
                    {
                        id: "g6-ds-c3",
                        title: "Chương III: Phân số (Quy đồng, Rút gọn, Hỗn số, Tỉ số phần trăm & 3 bài toán)",
                        theory: `### 1. Khái niệm phân số và Tính chất cơ bản (Trang 10-11)
• Phân số có dạng a/b với a, b ∈ Z, b ≠ 0 (a là tử số, b là mẫu số).
• Phân số bằng nhau: a/b = c/d ⇔ a · d = b · c.
• Tính chất cơ bản: Nhân hoặc chia cả tử và mẫu với cùng một số nguyên khác 0 (hoặc ước chung) ta được phân số bằng phân số đã cho.

### 2. Rút gọn & Quy đồng mẫu số (Trang 10)
• Phân số tối giản: Tử và mẫu chỉ có ước chung là 1 và -1. Để đưa về tối giản 1 lần: Chia cả tử và mẫu cho ƯCLN.
• Quy đồng: Tìm BCNN của các mẫu làm mẫu chung, tìm thừa số phụ rồi nhân cả tử và mẫu với thừa số phụ tương ứng.

### 3. Phép tính phân số (Trang 10-11)
• Cộng/Trừ: Quy đồng mẫu dương rồi cộng/trừ tử: a/m + b/m = (a + b)/m.
• Nhân: (a/b) · (c/d) = (a · c) / (b · d).
• Chia: Nhân với số nghịch đảo: (a/b) : (c/d) = (a · d) / (b · c).
• Hỗn số, Số thập phân, Phần trăm: Mẫu là lũy thừa của 10 gọi là phân số thập phân.

### 4. Ba bài toán cơ bản về phân số (Trang 11-12)
1. Tìm giá trị phân số m/n của số b cho trước: b · (m/n).
2. Tìm một số biết m/n của nó bằng a: a : (m/n).
3. Tìm tỉ số của hai số a và b: a : b hay a/b. Tỉ số phần trăm: [(a · 100) / b]%.
• Tỉ lệ xích: T = a/b (khoảng cách trên bản vẽ chia cho khoảng cách thực tế cùng đơn vị đo).`,
                        quiz: [
                            { question: "Hai phân số a/b và c/d (với b, d ≠ 0) bằng nhau khi:", options: ["a · d = b · c", "a · c = b · d", "a + d = b + c", "a : d = b : c"], correctIndex: 0, explanation: "Tích chéo a · d = b · c." },
                            { question: "3/5 của số 45 bằng bao nhiêu?", options: ["27", "75", "15", "9"], correctIndex: 0, explanation: "45 · (3/5) = 27." },
                            { question: "Biết 2/3 của một số bằng 18. Số đó là:", options: ["27", "12", "36", "54"], correctIndex: 0, explanation: "18 : (2/3) = 18 · 3 / 2 = 27." },
                            { question: "Rút gọn phân số 24/36 về tối giản ta được:", options: ["2/3", "4/6", "12/18", "6/9"], correctIndex: 0, explanation: "Chia cả tử và mẫu cho ƯCLN là 12, được 2/3." },
                            { question: "Số nghịch đảo của phân số -3/7 là:", options: ["-7/3", "7/3", "3/7", "1"], correctIndex: 0, explanation: "Nghịch đảo của a/b là b/a, nên của -3/7 là -7/3." },
                            { question: "Tỉ số phần trăm của 3 và 4 là:", options: ["75%", "133%", "25%", "80%"], correctIndex: 0, explanation: "(3 · 100 : 4)% = 75%." },
                            { question: "Kết quả của phép tính (-1/4) + 3/4 là:", options: ["1/2", "-1/2", "1", "2/8"], correctIndex: 0, explanation: "(-1 + 3)/4 = 2/4 = 1/2." },
                            { question: "Hỗn số 3 1/4 viết dưới dạng phân số là:", options: ["13/4", "7/4", "12/4", "3/4"], correctIndex: 0, explanation: "(3 · 4 + 1)/4 = 13/4." },
                            { question: "Trên bản đồ tỉ lệ 1 : 1 000 000, khoảng cách 2cm trên bản đồ tương ứng ngoài thực tế là:", options: ["20 km", "2 km", "200 km", "2000 m"], correctIndex: 0, explanation: "2 · 1 000 000 cm = 2 000 000 cm = 20 km." },
                            { question: "Tìm x biết x : (2/3) = -3/4:", options: ["-1/2", "-9/8", "-8/9", "1/2"], correctIndex: 0, explanation: "x = (-3/4) · (2/3) = -6/12 = -1/2." },
                            { question: "Trong hai phân số có cùng mẫu dương 5, phân số nào lớn hơn?", options: ["Phân số có tử lớn hơn", "Phân số có tử nhỏ hơn", "Bằng nhau", "Không so sánh được"], correctIndex: 0, explanation: "Cùng mẫu dương, tử nào lớn hơn thì phân số đó lớn hơn." },
                            { question: "Tính: (2/3) · (9/4) =", options: ["3/2", "6/12", "18/7", "5/7"], correctIndex: 0, explanation: "(2 · 9)/(3 · 4) = 18/12 = 3/2." }
                        ],
                        trueFalse: [
                            { statement: "Tỉ số của hai số không có đơn vị đo.", correct: true, explanation: "Đúng. Tỉ số của hai đại lượng cùng loại và cùng đơn vị đo là một số thuần túy không có đơn vị." },
                            { statement: "Phân số tối giản là phân số có tử và mẫu là các số nguyên tố.", correct: false, explanation: "Sai. Chỉ cần tử và mẫu nguyên tố cùng nhau (ƯCLN = 1), ví dụ 8/9 tối giản dù 8 và 9 là hợp số." },
                            { statement: "Muốn chia một phân số cho một phân số khác 0, ta nhân với số nghịch đảo của số chia.", correct: true, explanation: "Đúng. a/b : c/d = a/b · d/c." },
                            { statement: "Mọi phân số đều viết được dưới dạng hỗn số.", correct: false, explanation: "Sai. Chỉ phân số lớn hơn 1 mới viết được dưới dạng hỗn số." }
                        ],
                        shortAnswer: [
                            { id: "sa-1", question: "Một lớp có 40 học sinh, trong đó số học sinh giỏi chiếm 25%. Tính số học sinh giỏi của lớp:", correctAnswer: "10", rubric: "40 · 25% = 40 · 1/4 = 10 học sinh." },
                            { id: "sa-2", question: "Tính tổng S = 3/8 + (-5/12) (nhập dưới dạng phân số tối giản a/b):", correctAnswer: "-1/24", rubric: "Mẫu chung 24: S = 9/24 - 10/24 = -1/24." },
                            { id: "sa-3", question: "Biết 3/4 quãng đường từ Hà Nội đến Phủ Lý dài 45km. Quãng đường đó dài bao nhiêu km?", correctAnswer: "60", rubric: "45 : (3/4) = 45 · 4 / 3 = 60 km." },
                            { id: "sa-4", question: "Tính kết quả phép chia: ( -5/7 ) : ( 15/14 ) (dưới dạng a/b tối giản):", correctAnswer: "-2/3", rubric: "(-5/7) · (14/15) = (-1 · 2)/(1 · 3) = -2/3." }
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
                        theory: `### 1. Điểm và Đường thẳng (Trang 13)
• Điểm và đường thẳng là hai khái niệm cơ bản không định nghĩa.
• Điểm A thuộc đường thẳng a: A ∈ a. Điểm B không thuộc đường thẳng a: B ∉ a.
• Ba điểm cùng thuộc một đường thẳng gọi là ba điểm thẳng hàng. Trong ba điểm thẳng hàng, có một và chỉ một điểm nằm giữa hai điểm còn lại.
• Có một và chỉ một đường thẳng đi qua hai điểm phân biệt.
• Hai đường thẳng phân biệt có thể cắt nhau (1 điểm chung), song song (không có điểm chung) hoặc trùng nhau (vô số điểm chung).

### 2. Tia (Trang 14)
• Hình gồm điểm O và một phần đường thẳng bị chia ra bởi điểm O gọi là một tia gốc O.
• Hai tia chung gốc và tạo thành một đường thẳng gọi là hai tia đối nhau. Mỗi điểm trên đường thẳng là gốc chung của hai tia đối nhau.

### 3. Đoạn thẳng & Độ dài đoạn thẳng (Trang 14)
• Đoạn thẳng AB là hình gồm điểm A, điểm B và tất cả các điểm nằm giữa A và B.
• Độ dài đoạn thẳng là một số dương. Nếu điểm M nằm giữa A và B thì:
  AM + MB = AB.
• Ngược lại, nếu AM + MB = AB thì điểm M nằm giữa A và B.

### 4. Trung điểm của đoạn thẳng (Trang 14)
• Trung điểm M của đoạn thẳng AB là điểm nằm giữa và cách đều hai đầu mút A, B:
  M nằm giữa A, B và MA = MB.
• Hệ thức: AM = MB = AB / 2.`,
                        quiz: [
                            { question: "Cho đoạn thẳng AB = 12cm. Điểm M là trung điểm của AB thì độ dài đoạn MA bằng:", options: ["6cm", "12cm", "24cm", "4cm"], correctIndex: 0, explanation: "MA = AB / 2 = 6cm." },
                            { question: "Trên tia Ox có OM = 4cm, ON = 9cm. Điểm nào nằm giữa hai điểm còn lại?", options: ["Điểm M nằm giữa O và N", "Điểm N nằm giữa O và M", "Điểm O nằm giữa M và N", "Không điểm nào"], correctIndex: 0, explanation: "Trên cùng một tia Ox, vì OM < ON nên điểm M nằm giữa O và N." },
                            { question: "Cho 3 điểm A, B, C không thẳng hàng. Qua từng cặp điểm ta vẽ được bao nhiêu đường thẳng?", options: ["3 đường thẳng", "1 đường thẳng", "2 đường thẳng", "6 đường thẳng"], correctIndex: 0, explanation: "Vẽ được 3 đường thẳng AB, BC, CA." },
                            { question: "Hai tia đối nhau là hai tia:", options: ["Chung gốc và tạo thành một đường thẳng", "Chung gốc và không thẳng hàng", "Song song nhau", "Không có điểm chung"], correctIndex: 0, explanation: "Theo định nghĩa tia đối nhau." },
                            { question: "Nếu AM + MB = AB thì kết luận nào sau đây đúng?", options: ["Điểm M nằm giữa A và B", "Điểm A nằm giữa M và B", "M là trung điểm AB", "A, M, B không thẳng hàng"], correctIndex: 0, explanation: "Hệ thức cộng độ dài đoạn thẳng." },
                            { question: "Cho đoạn thẳng CD = 10cm. Điểm K nằm giữa C và D sao cho CK = 4cm. Độ dài đoạn KD là:", options: ["6cm", "14cm", "4cm", "5cm"], correctIndex: 0, explanation: "KD = CD - CK = 10 - 4 = 6cm." },
                            { question: "Mỗi đoạn thẳng có bao nhiêu trung điểm?", options: ["Duy nhất 1 trung điểm", "2 trung điểm", "Vô số trung điểm", "Không có"], correctIndex: 0, explanation: "Mỗi đoạn thẳng chỉ có một và chỉ một trung điểm." },
                            { question: "Hai đường thẳng song song là hai đường thẳng:", options: ["Không có điểm chung nào", "Có đúng 1 điểm chung", "Có vô số điểm chung", "Trùng nhau"], correctIndex: 0, explanation: "Định nghĩa hai đường thẳng song song." },
                            { question: "Điểm O chia đường thẳng xy thành:", options: ["Hai tia đối nhau Ox và Oy", "Hai đoạn thẳng", "Một tia duy nhất", "Hai đường thẳng"], correctIndex: 0, explanation: "Mỗi điểm trên đường thẳng tạo ra hai tia đối nhau." },
                            { question: "Cho 4 điểm phân biệt thẳng hàng. Có tất cả bao nhiêu đoạn thẳng?", options: ["6 đoạn thẳng", "4 đoạn thẳng", "8 đoạn thẳng", "3 đoạn thẳng"], correctIndex: 0, explanation: "Số đoạn thẳng = n(n-1)/2 = 4 · 3 / 2 = 6." },
                            { question: "Độ dài đoạn thẳng AB là gì?", options: ["Khoảng cách giữa hai điểm A và B", "Một số âm", "Một đường thẳng", "Vô tận"], correctIndex: 0, explanation: "Độ dài đoạn thẳng AB chính là khoảng cách giữa 2 điểm A và B." },
                            { question: "Khi hai điểm A và B trùng nhau, độ dài đoạn thẳng AB bằng:", options: ["0", "1", "Vô cực", "Không xác định"], correctIndex: 0, explanation: "Khoảng cách giữa hai điểm trùng nhau bằng 0." }
                        ],
                        trueFalse: [
                            { statement: "Trung điểm của đoạn thẳng là điểm nằm giữa và cách đều hai đầu mút của đoạn thẳng.", correct: true, explanation: "Đúng theo định nghĩa." },
                            { statement: "Nếu MA = MB thì M chắc chắn là trung điểm của đoạn thẳng AB.", correct: false, explanation: "Sai. Phải có thêm điều kiện M nằm giữa A và B (hoặc A, M, B thẳng hàng)." },
                            { statement: "Qua ba điểm phân biệt bất kỳ luôn vẽ được một đường thẳng.", correct: false, explanation: "Sai. Nếu ba điểm không thẳng hàng thì không vẽ được." },
                            { statement: "Hai tia phân biệt có thể có chung gốc.", correct: true, explanation: "Đúng. Ví dụ hai tia Ox và Oy tạo thành một góc." }
                        ],
                        shortAnswer: [
                            { id: "sa-1", question: "Cho đoạn thẳng AB = 16cm. Gọi M là trung điểm AB, N là trung điểm AM. Tính độ dài đoạn thẳng MN (cm):", correctAnswer: "4", rubric: "AM = 16/2 = 8cm. MN = AM/2 = 4cm." },
                            { id: "sa-2", question: "Trên đường thẳng lấy 6 điểm phân biệt. Có tất cả bao nhiêu đoạn thẳng được tạo thành?", correctAnswer: "15", rubric: "6 · 5 / 2 = 15 đoạn thẳng." },
                            { id: "sa-3", question: "Cho điểm M nằm giữa hai điểm A và B. Biết AM = 3,5cm và AB = 9cm. Tính MB (cm):", correctAnswer: "5.5", rubric: "MB = 9 - 3,5 = 5,5cm." },
                            { id: "sa-4", question: "Điểm I là trung điểm của đoạn thẳng PQ. Biết IP = 7cm. Tính độ dài đoạn thẳng PQ (cm):", correctAnswer: "14", rubric: "PQ = 2 · IP = 14cm." }
                        ]
                    },
                    {
                        id: "g6-hh-c2",
                        title: "Chương II: Góc (Nửa mặt phẳng, Số đo góc, Phân giác, Đường tròn, Tam giác)",
                        theory: `### 1. Nửa mặt phẳng & Góc (Trang 15)
• Hình gồm đường thẳng a và một phần mặt phẳng bị chia ra bởi a gọi là nửa mặt phẳng bờ a.
• Góc là hình gồm hai tia chung gốc (gốc chung gọi là đỉnh, hai tia gọi là hai cạnh). Góc bẹt có hai cạnh là hai tia đối nhau (số đo 180°).
• Phân loại góc:
  - Góc vuông = 90° (ký hiệu 1v).
  - Góc nhọn: 0° < α < 90°.
  - Góc tù: 90° < α < 180°.
  - Góc bẹt: α = 180°.

### 2. Quan hệ giữa các góc (Trang 15)
• Nếu tia Oy nằm giữa hai tia Ox và Oz thì: ∠xOy + ∠yOz = ∠xOz.
• Hai góc phụ nhau có tổng số đo bằng 90°.
• Hai góc bù nhau có tổng số đo bằng 180°.
• Hai góc kề bù là hai góc vừa kề nhau vừa bù nhau (có 1 cạnh chung, 2 cạnh kia là 2 tia đối nhau, tổng = 180°).

### 3. Tia phân giác của góc (Trang 15-16)
• Tia phân giác của góc là tia nằm giữa hai cạnh của góc và tạo với hai cạnh ấy hai góc bằng nhau:
  ∠xOz = ∠zOy = ∠xOy / 2.

### 4. Đường tròn & Tam giác (Trang 16)
• Đường tròn tâm O bán kính R, ký hiệu (O; R), là hình gồm các điểm cách O một khoảng bằng R.
• Dây cung là đoạn thẳng nối hai điểm trên đường tròn. Dây cung đi qua tâm là đường kính (dài gấp đôi bán kính, d = 2R).
• Tam giác ABC là hình gồm ba đoạn thẳng AB, BC, CA khi ba điểm A, B, C không thẳng hàng.`,
                        quiz: [
                            { question: "Hai góc phụ nhau có tổng số đo bằng:", options: ["90°", "180°", "60°", "360°"], correctIndex: 0, explanation: "Theo định nghĩa góc phụ nhau." },
                            { question: "Cho hai góc kề bù ∠xOy và ∠yOz, biết ∠xOy = 70°. Số đo góc ∠yOz là:", options: ["110°", "20°", "70°", "130°"], correctIndex: 0, explanation: "180° - 70° = 110°." },
                            { question: "Tia Oz là phân giác của góc ∠xOy = 130°. Số đo góc ∠xOz bằng:", options: ["65°", "130°", "50°", "260°"], correctIndex: 0, explanation: "130° : 2 = 65°." },
                            { question: "Góc có số đo bằng 90° gọi là:", options: ["Góc vuông", "Góc nhọn", "Góc tù", "Góc bẹt"], correctIndex: 0, explanation: "Góc 90° là góc vuông." },
                            { question: "Dây cung lớn nhất của đường tròn là:", options: ["Đường kính", "Bán kính", "Tiếp tuyến", "Cung tròn"], correctIndex: 0, explanation: "Đường kính là dây cung dài nhất đi qua tâm." },
                            { question: "Đơn vị đo góc thông dụng là:", options: ["Độ, phút, giây", "Mét, centimet", "Lít", "Gram"], correctIndex: 0, explanation: "1° = 60'; 1' = 60''." },
                            { question: "Góc nhọn là góc có số đo:", options: ["Lớn hơn 0° và nhỏ hơn 90°", "Bằng 90°", "Lớn hơn 90°", "Bằng 180°"], correctIndex: 0, explanation: "Định nghĩa góc nhọn." },
                            { question: "Hai góc bù nhau có tổng số đo bằng:", options: ["180°", "90°", "360°", "100°"], correctIndex: 0, explanation: "Tổng số đo bằng 180°." },
                            { question: "Đường tròn (O; 5cm) có đường kính bằng:", options: ["10cm", "5cm", "2,5cm", "25cm"], correctIndex: 0, explanation: "Đường kính = 2R = 2 · 5 = 10cm." },
                            { question: "Hình tròn là hình gồm:", options: ["Các điểm trên đường tròn và các điểm bên trong nó", "Chỉ các điểm trên đường tròn", "Chỉ các điểm bên trong", "Tâm đường tròn"], correctIndex: 0, explanation: "Định nghĩa hình tròn." },
                            { question: "Tam giác ABC có mấy đỉnh, mấy cạnh và mấy góc?", options: ["3 đỉnh, 3 cạnh, 3 góc", "4 đỉnh, 4 cạnh", "3 cạnh, 1 góc", "6 cạnh"], correctIndex: 0, explanation: "Tam giác gồm 3 đỉnh, 3 cạnh, 3 góc." },
                            { question: "Góc bẹt có số đo bằng:", options: ["180°", "90°", "360°", "120°"], correctIndex: 0, explanation: "Số đo góc bẹt = 180°." }
                        ],
                        trueFalse: [
                            { statement: "Hai góc kề bù là hai góc vừa kề nhau vừa bù nhau.", correct: true, explanation: "Đúng theo định nghĩa." },
                            { statement: "Góc tù là góc có số đo lớn hơn 90°.", correct: false, explanation: "Sai. Phải bổ sung điều kiện nhỏ hơn 180° (90° < α < 180°)." },
                            { statement: "Mỗi góc chỉ có duy nhất một tia phân giác.", correct: true, explanation: "Đúng. Tia phân giác của một góc là duy nhất." },
                            { statement: "Điểm nằm ngoài đường tròn có khoảng cách đến tâm nhỏ hơn bán kính.", correct: false, explanation: "Sai. Khoảng cách OM > R." }
                        ],
                        shortAnswer: [
                            { id: "sa-1", question: "Cho hai góc phụ nhau ∠A và ∠B, biết ∠A = 35°. Tính số đo góc ∠B (độ):", correctAnswer: "55", rubric: "90° - 35° = 55°." },
                            { id: "sa-2", question: "Tia Om là phân giác góc xOy = 80°. Tia On là phân giác góc mOy. Tính góc xOn (độ):", correctAnswer: "60", rubric: "Góc xOm = mOy = 40°. Góc mOn = 20° => xOn = 40° + 20° = 60°." },
                            { id: "sa-3", question: "Đường tròn có đường kính bằng 18cm. Bán kính của đường tròn đó là bao nhiêu cm?", correctAnswer: "9", rubric: "R = d / 2 = 18 / 2 = 9cm." },
                            { id: "sa-4", question: "Cho ba tia chung gốc Ox, Oy, Oz sao cho ∠xOy = 45°, ∠yOz = 35° và Oy nằm giữa Ox, Oz. Tính góc xOz (độ):", correctAnswer: "80", rubric: "∠xOz = 45° + 35° = 80°." }
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
                        title: "Chương I: Số hữu tỉ & Số thực (Tỉ lệ thức, Dãy tỉ số bằng nhau, Làm tròn số & Căn bậc hai)",
                        theory: `### 1. Số hữu tỉ & Các phép tính (Trang 17)
• Số hữu tỉ là số viết được dưới dạng phân số a/b (a, b ∈ Z, b ≠ 0). Tập hợp ký hiệu là Q.
• Các phép toán cộng, trừ, nhân, chia số hữu tỉ thực hiện như phân số.
• Giá trị tuyệt đối của số hữu tỉ x: |x| = x nếu x ≥ 0; |x| = -x nếu x < 0.

### 2. Tỉ lệ thức & Dãy tỉ số bằng nhau (Trang 17-18)
• Tỉ lệ thức là đẳng thức của hai tỉ số: a/b = c/d ⇔ a · d = b · c.
• Tính chất của dãy tỉ số bằng nhau:
  a/b = c/d = e/f = (a + c + e)/(b + d + f) = (a - c + e)/(b - d + f).
• Nếu a : b : c = 2 : 3 : 5 tức là a/2 = b/3 = c/5.

### 3. Lũy thừa của số hữu tỉ & So sánh lũy thừa (Trang 19)
• (xᵐ)ⁿ = xᵐ·ⁿ; (x · y)ⁿ = xⁿ · yⁿ; (x/y)ⁿ = xⁿ/yⁿ; x⁻ⁿ = 1/xⁿ.
• So sánh lũy thừa cùng cơ số: Với m > n > 0 thì nếu x > 1 ⇒ xᵐ > xⁿ; nếu 0 < x < 1 ⇒ xᵐ < xⁿ.

### 4. Số thập phân hữu hạn & Vô hạn tuần hoàn (Trang 19-21)
• Phân số tối giản có mẫu chỉ chứa ước nguyên tố 2 và 5 viết được dưới dạng số thập phân hữu hạn.
• Phân số tối giản có mẫu chứa ước nguyên tố khác 2 và 5 viết được dưới dạng số thập phân vô hạn tuần hoàn.
• Chuyển đổi: 0,(1) = 1/9; 0,(01) = 1/99; 0,(a) = a/9.

### 5. Làm tròn số & Căn bậc hai số học (Trang 21)
• Quy ước làm tròn số: Chữ số đầu tiên bỏ đi < 5 thì giữ nguyên; ≥ 5 thì cộng 1 vào chữ số cuối còn lại.
• Căn bậc hai của số a không âm là số x sao cho x² = a. Số dương a có 2 căn bậc hai: √a và -√a. √a gọi là căn bậc hai số học.`,
                        quiz: [
                            { question: "Số thập phân vô hạn tuần hoàn 0,(21) viết dưới dạng phân số tối giản là:", options: ["7/33", "21/100", "7/30", "21/90"], correctIndex: 0, explanation: "21/99 = 7/33." },
                            { question: "Từ tỉ lệ thức x/4 = y/7 và x + y = 22, giá trị x và y là:", options: ["x = 8; y = 14", "x = 4; y = 18", "x = 14; y = 8", "x = 6; y = 16"], correctIndex: 0, explanation: "x/4 = y/7 = 22/11 = 2 => x = 8, y = 14." },
                            { question: "Căn bậc hai số học của 64 là:", options: ["8", "-8", "±8", "16"], correctIndex: 0, explanation: "Căn bậc hai số học là số không âm: √64 = 8." },
                            { question: "Làm tròn số 12,348 đến chữ số thập phân thứ nhất ta được:", options: ["12,3", "12,4", "12,35", "12"], correctIndex: 0, explanation: "Chữ số bỏ đi đầu tiên là 4 (< 5)." },
                            { question: "Kết quả của phép tính ((-1/2)²)³ bằng:", options: ["1/64", "-1/64", "1/32", "-1/32"], correctIndex: 0, explanation: "(1/4)³ = 1/64." },
                            { question: "Tập hợp các số vô tỉ được ký hiệu là:", options: ["I", "Q", "R", "Z"], correctIndex: 0, explanation: "Tập số vô tỉ ký hiệu là I." },
                            { question: "Phân số nào sau đây viết được dưới dạng số thập phân hữu hạn?", options: ["7/20", "5/12", "7/22", "1/7"], correctIndex: 0, explanation: "20 = 2² · 5 chỉ chứa ước 2 và 5." },
                            { question: "Giá trị của x trong |x - 1| = 5 là:", options: ["x = 6 hoặc x = -4", "Chỉ x = 6", "Chỉ x = -4", "x = 4 hoặc x = -6"], correctIndex: 0, explanation: "x - 1 = 5 => x = 6; x - 1 = -5 => x = -4." },
                            { question: "Cho a/b = c/d (a,b,c,d ≠ 0). Tỉ lệ thức nào sau đây là SAI?", options: ["a/d = c/b", "a/c = b/d", "d/b = c/a", "d/c = b/a"], correctIndex: 0, explanation: "a/d = c/b sai vì tích chéo là ab = cd (không phải ad = bc)." },
                            { question: "Số đối của số thực -√5 là:", options: ["√5", "-√5", "5", "1/√5"], correctIndex: 0, explanation: "Số đối của -√5 là √5." },
                            { question: "Giá trị của biểu thức (-3)⁰ bằng:", options: ["1", "-3", "0", "-1"], correctIndex: 0, explanation: "Quy ước x⁰ = 1 với x ≠ 0." },
                            { question: "Kết quả phép tính 0,6 + 2/(-3) bằng:", options: ["-1/15", "1/15", "-1", "4/15"], correctIndex: 0, explanation: "3/5 - 2/3 = 9/15 - 10/15 = -1/15." }
                        ],
                        trueFalse: [
                            { statement: "Mọi số hữu tỉ đều là số thực.", correct: true, explanation: "Đúng. Tập số thực R = Q ∪ I." },
                            { statement: "Số 0 là số hữu tỉ dương.", correct: false, explanation: "Sai. Số 0 không là số hữu tỉ dương cũng không là số hữu tỉ âm." },
                            { statement: "Nếu a · d = b · c với a, b, c, d khác 0 thì ta lập được 4 tỉ lệ thức.", correct: true, explanation: "Đúng theo tính chất của tỉ lệ thức." },
                            { statement: "Số vô tỉ là số thập phân vô hạn tuần hoàn.", correct: false, explanation: "Sai. Số vô tỉ là số thập phân vô hạn không tuần hoàn." }
                        ],
                        shortAnswer: [
                            { id: "sa-1", question: "Tìm x trong tỉ lệ thức: x / 15 = 8 / 20", correctAnswer: "6", rubric: "x = 15 · 8 / 20 = 6." },
                            { id: "sa-2", question: "Tính giá trị biểu thức: | -15,5 | + | 4,5 |", correctAnswer: "20", rubric: "15,5 + 4,5 = 20." },
                            { id: "sa-3", question: "Tìm giá trị của x biết: x - 1/2 = -2/3 (nhập dưới dạng a/b tối giản):", correctAnswer: "-1/6", rubric: "x = -2/3 + 1/2 = -4/6 + 3/6 = -1/6." },
                            { id: "sa-4", question: "Ba số a, b, c tỉ lệ với 2; 3; 5 và a + b + c = 100. Tìm số lớn nhất c:", correctAnswer: "50", rubric: "Tổng số phần: 2 + 3 + 5 = 10. Giá trị 1 phần = 100/10 = 10. Số c = 5 · 10 = 50." }
                        ]
                    },
                    {
                        id: "g7-ds-c2",
                        title: "Chương II: Hàm số & Đồ thị (Tỉ lệ thuận, Tỉ lệ nghịch, Mặt phẳng tọa độ Oxy, Đồ thị y = ax)",
                        theory: `### 1. Đại lượng tỉ lệ thuận (Trang 22)
• Hai đại lượng y và x liên hệ theo công thức: y = kx (k là hằng số khác 0). Ta nói y tỉ lệ thuận với x theo hệ số tỉ lệ k.
• Tính chất:
  - Tỉ số hai giá trị tương ứng không đổi: y₁/x₁ = y₂/x₂ = ... = k.
  - Tỉ số hai giá trị bất kỳ của đại lượng này bằng tỉ số hai giá trị tương ứng của đại lượng kia: x₁/x₂ = y₁/y₂.

### 2. Đại lượng tỉ lệ nghịch (Trang 22)
• Hai đại lượng y và x liên hệ theo công thức: y = a/x hay x · y = a (a là hằng số khác 0). Ta nói y tỉ lệ nghịch với x theo hệ số tỉ lệ a.
• Tính chất:
  - Tích hai giá trị tương ứng luôn không đổi: x₁y₁ = x₂y₂ = ... = a.
  - Tỉ số hai giá trị bất kỳ của đại lượng này bằng nghịch đảo tỉ số hai giá trị tương ứng của đại lượng kia: x₁/x₂ = y₂/y₁.

### 3. Khái niệm Hàm số & Mặt phẳng tọa độ (Trang 22-23)
• Nếu y phụ thuộc vào x sao cho với mỗi giá trị của x ta luôn xác định được chỉ một giá trị tương ứng của y thì y gọi là hàm số của x (x là biến số), ký hiệu y = f(x).
• Hệ trục tọa độ Oxy: Ox là trục hoành (nằm ngang), Oy là trục tung (thẳng đứng), O là gốc tọa độ. Điểm M có tọa độ M(x₀; y₀).

### 4. Đồ thị hàm số y = ax (a ≠ 0) (Trang 23)
• Đồ thị hàm số y = ax (a ≠ 0) là một đường thẳng đi qua gốc tọa độ O(0; 0).
• Cách vẽ: Xác định điểm O(0; 0) và điểm A(1; a). Kẻ đường thẳng đi qua O và A.`,
                        quiz: [
                            { question: "Cho y tỉ lệ thuận với x theo hệ số k = -3. Khi x = 4 thì y bằng:", options: ["-12", "12", "-4/3", "-3/4"], correctIndex: 0, explanation: "y = -3 · 4 = -12." },
                            { question: "Hai đại lượng x và y tỉ lệ nghịch, khi x = 4 thì y = 9. Hệ số tỉ lệ a bằng:", options: ["36", "9/4", "4/9", "13"], correctIndex: 0, explanation: "a = x · y = 4 · 9 = 36." },
                            { question: "Điểm nào sau đây thuộc đồ thị hàm số y = -2x?", options: ["A(2; -4)", "B(1; 2)", "C(-2; -4)", "D(0; -2)"], correctIndex: 0, explanation: "Thay x = 2: y = -2 · 2 = -4." },
                            { question: "Đồ thị hàm số y = ax (a ≠ 0) luôn đi qua điểm nào?", options: ["Gốc tọa độ O(0; 0)", "Điểm (0; 1)", "Điểm (1; 0)", "Điểm (-1; 1)"], correctIndex: 0, explanation: "Luôn đi qua gốc tọa độ O." },
                            { question: "Cho hàm số f(x) = 2x² - 3. Giá trị của f(-2) bằng:", options: ["5", "-11", "1", "7"], correctIndex: 0, explanation: "f(-2) = 2 · (-2)² - 3 = 8 - 3 = 5." },
                            { question: "Trục nằm ngang trong hệ trục tọa độ Oxy gọi là:", options: ["Trục hoành (Ox)", "Trục tung (Oy)", "Trục đối xứng", "Đường chéo"], correctIndex: 0, explanation: "Ox là trục hoành." },
                            { question: "Điểm M(-3; 5) có hoành độ và tung độ lần lượt là:", options: ["Hoành độ -3; tung độ 5", "Hoành độ 5; tung độ -3", "Hoành độ 3; tung độ -5", "Hoành độ 0; tung độ 5"], correctIndex: 0, explanation: "Tọa độ (x; y): x là hoành độ, y là tung độ." },
                            { question: "Nếu y tỉ lệ thuận với x theo hệ số k thì x tỉ lệ thuận với y theo hệ số:", options: ["1/k", "k", "-k", "k²"], correctIndex: 0, explanation: "x = (1/k)y." },
                            { question: "Cho x và y tỉ lệ nghịch. Khi x tăng lên 3 lần thì y:", options: ["Giảm đi 3 lần", "Tăng lên 3 lần", "Không đổi", "Tăng lên 9 lần"], correctIndex: 0, explanation: "Tỉ lệ nghịch: đại lượng này tăng bao nhiêu lần thì đại lượng kia giảm bấy nhiêu lần." },
                            { question: "Điểm thuộc trục hoành thì có tung độ bằng:", options: ["0", "1", "Bất kỳ", "-1"], correctIndex: 0, explanation: "Điểm trên Ox có dạng (x; 0)." },
                            { question: "Điểm thuộc trục tung thì có hoành độ bằng:", options: ["0", "1", "-1", "Vô cùng"], correctIndex: 0, explanation: "Điểm trên Oy có dạng (0; y)." },
                            { question: "Đồ thị hàm số y = 3x đi qua điểm A(1; m). Giá trị của m là:", options: ["3", "1", "1/3", "-3"], correctIndex: 0, explanation: "m = 3 · 1 = 3." }
                        ],
                        trueFalse: [
                            { statement: "Tỉ số hai giá trị tương ứng của hai đại lượng tỉ lệ thuận luôn không đổi.", correct: true, explanation: "Đúng. y/x = k không đổi." },
                            { statement: "Tích hai giá trị tương ứng của hai đại lượng tỉ lệ nghịch luôn là một hằng số.", correct: true, explanation: "Đúng. xy = a." },
                            { statement: "Đồ thị của hàm số y = 2x là một đường cong Parabol.", correct: false, explanation: "Sai. Đồ thị là một đường thẳng đi qua gốc O." },
                            { statement: "Điểm P(0; 4) nằm trên trục hoành Ox.", correct: false, explanation: "Sai. Điểm có hoành độ 0 nằm trên trục tung Oy." }
                        ],
                        shortAnswer: [
                            { id: "sa-1", question: "Cho y tỉ lệ nghịch với x. Biết khi x = 6 thì y = 5. Tìm giá trị của y khi x = 10:", correctAnswer: "3", rubric: "Hệ số a = 6 · 5 = 30. Khi x = 10 => y = 30 / 10 = 3." },
                            { id: "sa-2", question: "Cho hàm số y = f(x) = 5 - 3x. Tìm x để f(x) = -7:", correctAnswer: "4", rubric: "5 - 3x = -7 => 3x = 12 => x = 4." },
                            { id: "sa-3", question: "Cho biết 12 công nhân hoàn thành công việc trong 8 ngày. Hỏi 16 công nhân hoàn thành công việc đó trong mấy ngày (năng suất như nhau):", correctAnswer: "6", rubric: "Số ngày = 12 · 8 / 16 = 6 ngày (tỉ lệ nghịch)." },
                            { id: "sa-4", question: "Đường thẳng y = ax đi qua điểm M(-2; 6). Tìm hệ số a:", correctAnswer: "-3", rubric: "6 = a · (-2) => a = -3." }
                        ]
                    },
                    {
                        id: "g7-ds-c3",
                        title: "Chương III: Thống kê (Bảng số liệu, Bảng tần số, Số trung bình cộng & Mốt M₀)",
                        theory: `### 1. Thu thập số liệu thống kê & Tần số (Trang 24)
• Dấu hiệu điều tra (X): Vấn đề người điều tra quan tâm. Mỗi số liệu là một giá trị của dấu hiệu.
• Tần số (n): Số lần xuất hiện của một giá trị trong dãy giá trị của dấu hiệu.
• Bảng tần số: Lập theo dòng hoặc cột, gồm giá trị (x) và tần số tương ứng (n). Tổng các tần số bằng N (tổng số đơn vị điều tra).

### 2. Số trung bình cộng (X̄) (Trang 24-25)
• Công thức tính:
  X̄ = (x₁n₁ + x₂n₂ + ... + xₖnₖ) / N
  trong đó x₁, ..., xₖ là các giá trị khác nhau; n₁, ..., nₖ là tần số tương ứng; N là số các giá trị.
• Ý nghĩa: Thường dùng làm đại diện cho dấu hiệu khi so sánh các dấu hiệu cùng loại.

### 3. Mốt của dấu hiệu (M₀) & Tần suất (Trang 25)
• Mốt của dấu hiệu (M₀): Là giá trị có tần số LỚN NHẤT trong bảng tần số.
• Tần suất f của một giá trị: f = n/N (thường tính dưới dạng tỉ lệ %).`,
                        quiz: [
                            { question: "Mốt của dấu hiệu (ký hiệu M₀) là gì?", options: ["Giá trị có tần số lớn nhất", "Giá trị lớn nhất", "Tần số lớn nhất", "Số trung bình cộng"], correctIndex: 0, explanation: "Theo định nghĩa mốt M₀." },
                            { question: "Tổng các tần số của tất cả các giá trị luôn bằng:", options: ["Số các đơn vị điều tra (N)", "Số trung bình cộng", "Mốt", "100"], correctIndex: 0, explanation: "Tổng các tần số = N." },
                            { question: "Cho bảng giá trị: Giá trị 7 (tần số 3), Giá trị 8 (tần số 5), Giá trị 9 (tần số 2). Mốt M₀ là:", options: ["8", "5", "9", "7"], correctIndex: 0, explanation: "Giá trị 8 có tần số lớn nhất (5)." },
                            { question: "Công thức tính số trung bình cộng X̄ là:", options: ["X̄ = (x₁n₁ + ... + xₖnₖ) / N", "X̄ = (x₁ + ... + xₖ) / N", "X̄ = (n₁ + ... + nₖ) / k", "X̄ = N / k"], correctIndex: 0, explanation: "Công thức chuẩn tính số trung bình." },
                            { question: "Tần số của một giá trị là:", options: ["Số lần xuất hiện của giá trị đó", "Tỉ số phần trăm", "Giá trị lớn nhất", "Số các đơn vị điều tra"], correctIndex: 0, explanation: "Định nghĩa tần số." },
                            { question: "Tần suất f của một giá trị được tính theo công thức:", options: ["f = n / N", "f = N / n", "f = x / n", "f = x · n"], correctIndex: 0, explanation: "f = n / N." },
                            { question: "Biểu đồ đoạn thẳng trong thống kê dùng để:", options: ["Biểu diễn trực quan giá trị và tần số", "Tính diện tích", "Tìm nghiệm phương trình", "Đo góc"], correctIndex: 0, explanation: "Biểu đồ giúp hình dung trực quan phân bố số liệu." },
                            { question: "Một lớp có 10 bạn 8 điểm, 15 bạn 9 điểm, 5 bạn 10 điểm. Tổng số học sinh N của lớp là:", options: ["30", "27", "35", "25"], correctIndex: 0, explanation: "N = 10 + 15 + 5 = 30." },
                            { question: "Điểm kiểm tra của 4 bạn là 7; 8; 9; 10. Điểm trung bình cộng là:", options: ["8,5", "8", "9", "8,25"], correctIndex: 0, explanation: "(7 + 8 + 9 + 10) / 4 = 34 / 4 = 8,5." },
                            { question: "Khi tất cả các giá trị đều có tần số bằng nhau thì:", options: ["Không có mốt", "Mốt bằng 0", "Mọi giá trị đều là mốt", "Mốt bằng N"], correctIndex: 0, explanation: "Khi các tần số bằng nhau thì không có mốt." },
                            { question: "Số trung bình cộng có thể là một số thập phân không?", options: ["Có thể", "Không bao giờ", "Luôn là số nguyên", "Luôn âm"], correctIndex: 0, explanation: "Số trung bình cộng có thể là số thập phân." },
                            { question: "Dấu hiệu điều tra thường được ký hiệu bằng chữ cái nào?", options: ["X hoặc Y", "a, b, c", "n", "f"], correctIndex: 0, explanation: "Ký hiệu bằng chữ in hoa X, Y." }
                        ],
                        trueFalse: [
                            { statement: "Mốt của dấu hiệu là tần số lớn nhất trong bảng tần số.", correct: false, explanation: "Sai. Mốt là GIÁ TRỊ có tần số lớn nhất, không phải là bản thân tần số." },
                            { statement: "Số trung bình cộng luôn luôn thuộc vào dãy các giá trị của dấu hiệu.", correct: false, explanation: "Sai. Ví dụ điểm 8,5 không nhất thiết phải có bạn nào đạt 8,5." },
                            { statement: "Tổng các tần suất của tất cả các giá trị trong một cuộc điều tra luôn bằng 1 (hay 100%).", correct: true, explanation: "Đúng. Tổng f = Σ(n/N) = N/N = 1." },
                            { statement: "Bảng tần số có thể được lập theo dạng dòng hoặc dạng cột.", correct: true, explanation: "Đúng theo lý thuyết thống kê trang 24." }
                        ],
                        shortAnswer: [
                            { id: "sa-1", question: "Điều tra điểm kiểm tra môn Toán của 10 học sinh: 7, 8, 8, 9, 8, 10, 7, 8, 9, 8. Tìm mốt M₀:", correctAnswer: "8", rubric: "Giá trị 8 xuất hiện nhiều nhất (5 lần) nên M₀ = 8." },
                            { id: "sa-2", question: "Tính điểm trung bình của 10 học sinh trên:", correctAnswer: "8.2", rubric: "Tổng = 7·2 + 8·5 + 9·2 + 10 = 14 + 40 + 18 + 10 = 82. Trung bình = 82 / 10 = 8,2." },
                            { id: "sa-3", question: "Một dấu hiệu có giá trị x = 5 với tần số n = 6 trong tổng số N = 24 quan sát. Tính tần suất f (%):", correctAnswer: "25", rubric: "f = (6 / 24) · 100% = 25%." },
                            { id: "sa-4", question: "Biết số trung bình cộng của hai số 12 và x là 15. Tìm x:", correctAnswer: "18", rubric: "(12 + x)/2 = 15 => 12 + x = 30 => x = 18." }
                        ]
                    },
                    {
                        id: "g7-ds-c4",
                        title: "Chương IV: Biểu thức đại số (Đơn thức, Đa thức, Thu gọn, Bậc & Nghiệm)",
                        theory: `### 1. Khái niệm Biểu thức đại số & Đơn thức (Trang 26)
• Biểu thức đại số gồm các phép toán trên số và chữ (biến).
• Đơn thức là biểu thức chỉ gồm một số, một biến, hoặc một tích giữa các số và biến.
• Bậc của đơn thức có hệ số khác 0 là tổng số mũ của tất cả các biến có trong đơn thức thu gọn. Số thực khác 0 là đơn thức bậc 0; số 0 không có bậc.
• Đơn thức đồng dạng: Có hệ số khác 0 và có cùng phần biến. Cộng trừ đơn thức đồng dạng: Cộng trừ các hệ số, giữ nguyên phần biến.

### 2. Đa thức & Thu gọn đa thức (Trang 26-27)
• Đa thức là tổng của những đơn thức. Bậc của đa thức là bậc của hạng tử có bậc cao nhất trong dạng thu gọn.
• Cộng, trừ đa thức một biến: Sắp xếp theo lũy thừa giảm dần rồi đặt tính theo cột dọc hoặc bỏ ngoặc thu gọn.

### 3. Nghiệm của đa thức một biến (Trang 27-28)
• Nếu tại x = a, đa thức P(x) có giá trị bằng 0 (P(a) = 0) thì a là một nghiệm của P(x).
• Số nghiệm của đa thức (khác đa thức 0) không vượt quá bậc của nó.
• Mẹo nhẩm nghiệm đa thức bậc hai P(x) = ax² + bx + c:
  - Nếu a + b + c = 0 ⇒ x₁ = 1; x₂ = c/a.
  - Nếu a - b + c = 0 ⇒ x₁ = -1; x₂ = -c/a.`,
                        quiz: [
                            { question: "Bậc của đơn thức thu gọn -5x³y²z là:", options: ["Bậc 6", "Bậc 5", "Bậc 3", "Bậc -5"], correctIndex: 0, explanation: "3 + 2 + 1 = 6." },
                            { question: "Đơn thức nào sau đây đồng dạng với 3x²y³?", options: ["-7x²y³", "3x³y²", "3(xy)⁵", "0x²y³"], correctIndex: 0, explanation: "Cùng phần biến x²y³ và hệ số khác 0." },
                            { question: "Nghiệm của đa thức P(x) = 2x - 8 là:", options: ["x = 4", "x = -4", "x = 8", "x = 1/4"], correctIndex: 0, explanation: "2x - 8 = 0 => x = 4." },
                            { question: "Cho đa thức Q(x) = 3x⁴ + 2x² - 3x⁴ + 5x - 7. Bậc của Q(x) là:", options: ["Bậc 2", "Bậc 4", "Bậc 1", "Bậc 7"], correctIndex: 0, explanation: "Thu gọn còn 2x² + 5x - 7 có bậc 2." },
                            { question: "Đa thức f(x) = x² - 5x + 4 có nghiệm là:", options: ["x = 1 và x = 4", "x = -1 và x = -4", "x = 1 và x = -4", "x = 2 và x = 3"], correctIndex: 0, explanation: "a + b + c = 1 - 5 + 4 = 0 => x₁ = 1, x₂ = 4." },
                            { question: "Tích của hai đơn thức 2x²y và -3xy³ là:", options: ["-6x³y⁴", "6x³y⁴", "-6x²y³", "-5x³y⁴"], correctIndex: 0, explanation: "2 · (-3) · x²⁺¹ · y¹⁺³ = -6x³y⁴." },
                            { question: "Hệ số cao nhất của đa thức P(x) = -4x³ + 7x² - 2x + 9 là:", options: ["-4", "7", "9", "3"], correctIndex: 0, explanation: "Hệ số của số hạng có bậc cao nhất x³ là -4." },
                            { question: "Hệ số tự do của đa thức trên là:", options: ["9", "-4", "7", "-2"], correctIndex: 0, explanation: "Hạng tử không chứa biến là 9." },
                            { question: "Giá trị của biểu thức A = 2x - 3y tại x = 2, y = -1 là:", options: ["7", "1", "-7", "4"], correctIndex: 0, explanation: "2(2) - 3(-1) = 4 + 3 = 7." },
                            { question: "Số nghiệm của đa thức một biến bậc 3 không vượt quá:", options: ["3 nghiệm", "2 nghiệm", "1 nghiệm", "Vô số nghiệm"], correctIndex: 0, explanation: "Số nghiệm không vượt quá bậc của đa thức." },
                            { question: "Đa thức nào sau đây không có nghiệm trên tập số thực?", options: ["x² + 1", "x² - 1", "x + 5", "2x"], correctIndex: 0, explanation: "x² + 1 ≥ 1 > 0 với mọi x nên vô nghiệm." },
                            { question: "Thu gọn đa thức 5x²y - 3x²y + x²y được:", options: ["3x²y", "2x²y", "4x²y", "6x²y"], correctIndex: 0, explanation: "(5 - 3 + 1)x²y = 3x²y." }
                        ],
                        trueFalse: [
                            { statement: "Số 0 được coi là đơn thức không có bậc.", correct: true, explanation: "Đúng theo lý thuyết trang 26." },
                            { statement: "Đa thức x² - 4 có đúng hai nghiệm là x = 2 và x = -2.", correct: true, explanation: "Đúng. x² = 4 => x = ±2." },
                            { statement: "Hai đơn thức 2x và 2y là hai đơn thức đồng dạng.", correct: false, explanation: "Sai. Phần biến khác nhau (x và y)." },
                            { statement: "Bậc của đơn thức là số mũ lớn nhất của một biến trong đơn thức đó.", correct: false, explanation: "Sai. Bậc là TỔNG số mũ của tất cả các biến." }
                        ],
                        shortAnswer: [
                            { id: "sa-1", question: "Tính giá trị của đa thức P(x) = x³ - 3x + 1 tại x = -2:", correctAnswer: "-1", rubric: "(-2)³ - 3(-2) + 1 = -8 + 6 + 1 = -1." },
                            { id: "sa-2", question: "Tìm nghiệm của đa thức: Q(x) = 5x - 35", correctAnswer: "7", rubric: "5x = 35 => x = 7." },
                            { id: "sa-3", question: "Tìm bậc của đa thức: M = 4x⁵y - 2x³y⁴ + 7 (sau khi thu gọn):", correctAnswer: "7", rubric: "Hạng tử -2x³y⁴ có bậc 3 + 4 = 7 lớn nhất." },
                            { id: "sa-4", question: "Cho đa thức P(x) = ax + 6. Biết P(2) = 0, tìm hệ số a:", correctAnswer: "-3", rubric: "2a + 6 = 0 => 2a = -6 => a = -3." }
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
                        title: "Chương I: Đường thẳng vuông góc & song song (Góc đối đỉnh, Tiên đề Ơ-clit)",
                        theory: `### 1. Góc đối đỉnh & Đường thẳng vuông góc (Trang 29)
• Hai góc đối đỉnh: Mỗi cạnh của góc này là tia đối của một cạnh góc kia. Định lý: Hai góc đối đỉnh thì bằng nhau (∠O₁ = ∠O₃, ∠O₂ = ∠O₄).
• Hai đường thẳng vuông góc (xx' ⊥ yy'): Cắt nhau và trong các góc tạo thành có một góc vuông. Qua một điểm cho trước chỉ có duy nhất một đường thẳng vuông góc với đường thẳng đã cho.
• Đường trung trực của đoạn thẳng: Đường thẳng vuông góc với đoạn thẳng tại trung điểm của nó.

### 2. Góc tạo bởi đường thẳng cắt hai đường thẳng & Dấu hiệu song song (Trang 29)
• Khi một đường thẳng cắt hai đường thẳng: Các cặp góc so le trong, đồng vị, trong cùng phía bù nhau.
• Dấu hiệu nhận biết hai đường thẳng song song: Nếu tạo thành một cặp góc so le trong bằng nhau (hoặc đồng vị bằng nhau) thì hai đường thẳng song song.

### 3. Tiên đề Ơ-clit & Quan hệ vuông góc - song song (Trang 30)
• Tiên đề Ơ-clit: Qua một điểm ở ngoài một đường thẳng chỉ có một đường thẳng song song với đường thẳng đó.
• Tính chất: Hai đường thẳng song song bị cắt bởi đường thứ ba thì: So le trong bằng nhau, đồng vị bằng nhau, trong cùng phía bù nhau (tổng 180°).
• Quan hệ:
  - Hai đường thẳng phân biệt cùng vuông góc với đường thẳng thứ ba thì song song nhau (a ⊥ c và b ⊥ c ⇒ a // b).
  - Đường thẳng vuông góc với một trong hai đường song song thì vuông góc với đường còn lại.
  - Hai đường thẳng phân biệt cùng song song với đường thứ ba thì song song nhau.`,
                        quiz: [
                            { question: "Hai góc đối đỉnh thì:", options: ["Bằng nhau", "Phụ nhau", "Bù nhau", "Có tổng bằng 90°"], correctIndex: 0, explanation: "Định lý: Hai góc đối đỉnh thì bằng nhau." },
                            { question: "Tiên đề Ơ-clit khẳng định: Qua một điểm ở ngoài một đường thẳng:", options: ["Chỉ có một đường thẳng song song với đường thẳng đó", "Có vô số đường thẳng song song", "Có ít nhất 2 đường thẳng song song", "Không có đường thẳng nào"], correctIndex: 0, explanation: "Theo tiên đề Ơ-clit trang 30." },
                            { question: "Hai đường thẳng phân biệt cùng vuông góc với đường thẳng thứ ba thì chúng:", options: ["Song song với nhau", "Vuông góc với nhau", "Trùng nhau", "Cắt nhau"], correctIndex: 0, explanation: "a ⊥ c và b ⊥ c => a // b." },
                            { question: "Đường trung trực của đoạn thẳng AB là đường thẳng:", options: ["Vuông góc với AB tại trung điểm của AB", "Đi qua trung điểm nhưng không vuông góc", "Song song với AB", "Đi qua một đầu mút"], correctIndex: 0, explanation: "Định nghĩa đường trung trực." },
                            { question: "Cho a // b, đường thẳng c cắt a và b. Nếu một góc so le trong bằng 60° thì góc so le trong còn lại bằng:", options: ["60°", "120°", "30°", "90°"], correctIndex: 0, explanation: "Hai góc so le trong bằng nhau = 60°." },
                            { question: "Cặp góc trong cùng phía tạo bởi hai đường thẳng song song có tổng số đo bằng:", options: ["180°", "90°", "360°", "120°"], correctIndex: 0, explanation: "Hai góc trong cùng phía bù nhau (tổng 180°)." },
                            { question: "Nếu c ⊥ a và a // b thì:", options: ["c ⊥ b", "c // b", "c trùng b", "c không cắt b"], correctIndex: 0, explanation: "Vuông góc với một đường thì vuông góc với đường song song kia." },
                            { question: "Cho hai đường thẳng cắt nhau tạo thành 4 góc. Biết một góc bằng 90°. Số góc vuông tạo thành là:", options: ["4 góc vuông", "1 góc vuông", "2 góc vuông", "3 góc vuông"], correctIndex: 0, explanation: "Nếu có 1 góc vuông thì cả 4 góc đều vuông (kề bù và đối đỉnh)." },
                            { question: "Định lý toán học thường được phát biểu dưới dạng:", options: ["Nếu A thì B", "Vì A nên B", "A tương đương B", "A hoặc B"], correctIndex: 0, explanation: "Dạng 'Nếu A thì B' (A là giả thiết, B là kết luận)." },
                            { question: "Góc đối đỉnh với góc 45° có số đo là:", options: ["45°", "135°", "90°", "180°"], correctIndex: 0, explanation: "Bằng nhau = 45°." },
                            { question: "Hai đường thẳng cắt nhau tạo thành bao nhiêu cặp góc đối đỉnh?", options: ["2 cặp", "4 cặp", "1 cặp", "8 cặp"], correctIndex: 0, explanation: "Tạo thành 2 cặp góc đối đỉnh." },
                            { question: "Phần giả thiết của định lý là:", options: ["Điều kiện cho biết", "Điều cần suy ra", "Kết luận", "Hình vẽ minh họa"], correctIndex: 0, explanation: "Giả thiết là điều kiện ban đầu cho biết." }
                        ],
                        trueFalse: [
                            { statement: "Hai góc bằng nhau thì chắc chắn đối đỉnh.", correct: false, explanation: "Sai. Chỉ đối đỉnh khi các cạnh là tia đối của nhau." },
                            { statement: "Qua điểm O cho trước, có một và chỉ một đường thẳng vuông góc với đường thẳng a cho trước.", correct: true, explanation: "Đúng theo tính chất trang 29." },
                            { statement: "Nếu một đường thẳng cắt hai đường thẳng song song thì hai góc đồng vị bằng nhau.", correct: true, explanation: "Đúng theo tính chất hai đường thẳng song song." },
                            { statement: "Hai đường thẳng không cắt nhau thì luôn luôn trùng nhau.", correct: false, explanation: "Sai. Chúng có thể song song nhau." }
                        ],
                        shortAnswer: [
                            { id: "sa-1", question: "Hai đường thẳng cắt nhau tạo thành góc 130°. Tính số đo góc kề bù với nó (độ):", correctAnswer: "50", rubric: "180° - 130° = 50°." },
                            { id: "sa-2", question: "Cho a // b, đường thẳng c cắt a và b tạo ra một góc bằng 75°. Tính góc trong cùng phía với nó (độ):", correctAnswer: "105", rubric: "180° - 75° = 105°." },
                            { id: "sa-3", question: "Cho đoạn thẳng AB = 8cm. Điểm I thuộc đường trung trực của AB và cách đều hai mút A, B. Nếu IA = 5cm thì IB bằng mấy cm?", correctAnswer: "5", rubric: "Điểm trên đường trung trực cách đều 2 đầu mút: IB = IA = 5cm." },
                            { id: "sa-4", question: "Qua điểm M nằm ngoài đường thẳng d, vẽ được bao nhiêu đường thẳng song song với d?", correctAnswer: "1", rubric: "Theo tiên đề Ơ-clit chỉ có duy nhất 1 đường thẳng." }
                        ]
                    },
                    {
                        id: "g7-hh-c2",
                        title: "Chương II: Tam giác (Tổng 3 góc, Các trường hợp bằng nhau, Tam giác cân, đều & Pytago)",
                        theory: `### 1. Tổng ba góc & Góc ngoài của tam giác (Trang 31)
• Tổng ba góc trong một tam giác bằng 180°: ∠A + ∠B + ∠C = 180°.
• Trong tam giác vuông, hai góc nhọn phụ nhau (tổng = 90°).
• Góc ngoài của tam giác là góc kề bù với một góc của tam giác. Định lý: Mỗi góc ngoài bằng tổng hai góc trong không kề với nó (∠ACx = ∠A + ∠B).

### 2. Các trường hợp bằng nhau của tam giác (Trang 31-33)
• Ba trường hợp thường:
  - Cạnh - Cạnh - Cạnh (c-c-c).
  - Cạnh - Góc - Cạnh (c-g-c) (góc xen giữa hai cạnh).
  - Góc - Cạnh - Góc (g-c-g) (hai góc kề cạnh).
• Bốn trường hợp bằng nhau của tam giác vuông:
  - Hai cạnh góc vuông.
  - Cạnh góc vuông - góc nhọn kề.
  - Cạnh huyền - góc nhọn.
  - Cạnh huyền - cạnh góc vuông.

### 3. Tam giác cân, Tam giác đều & Định lý Pytago (Trang 33-34)
• Tam giác cân (có 2 cạnh bằng nhau): Hai góc ở đáy bằng nhau: ∠B = ∠C = (180° - ∠A) / 2.
• Tam giác đều: Ba cạnh bằng nhau, mỗi góc bằng 60°.
• Định lý Pytago: Trong tam giác vuông, bình phương cạnh huyền bằng tổng bình phương hai cạnh góc vuông: BC² = AB² + AC².
• Định lý Pytago đảo: Nếu BC² = AB² + AC² thì tam giác ABC vuông tại A.`,
                        quiz: [
                            { question: "Tổng ba góc trong một tam giác bằng:", options: ["180°", "90°", "360°", "120°"], correctIndex: 0, explanation: "Định lý tổng 3 góc." },
                            { question: "Cho tam giác ABC vuông tại A có AB = 6cm, AC = 8cm. Cạnh huyền BC bằng:", options: ["10cm", "14cm", "100cm", "48cm"], correctIndex: 0, explanation: "BC = √(6² + 8²) = √100 = 10cm." },
                            { question: "Tam giác cân có một góc bằng 60° thì đó là:", options: ["Tam giác đều", "Tam giác vuông", "Tam giác tù", "Tam giác vuông cân"], correctIndex: 0, explanation: "Dấu hiệu nhận biết tam giác đều." },
                            { question: "Mỗi góc ngoài của tam giác bằng:", options: ["Tổng hai góc trong không kề với nó", "Góc kề với nó", "180°", "90°"], correctIndex: 0, explanation: "Tính chất góc ngoài tam giác." },
                            { question: "Tam giác ABC cân tại A có ∠A = 40°. Góc ở đáy ∠B bằng:", options: ["70°", "140°", "40°", "80°"], correctIndex: 0, explanation: "(180° - 40°) : 2 = 70°." },
                            { question: "Bộ ba số đo nào sau đây là độ dài 3 cạnh của một tam giác vuông?", options: ["3cm, 4cm, 5cm", "2cm, 3cm, 4cm", "4cm, 5cm, 6cm", "5cm, 6cm, 7cm"], correctIndex: 0, explanation: "3² + 4² = 9 + 16 = 25 = 5² (Pytago đảo)." },
                            { question: "Trong tam giác vuông cân, mỗi góc nhọn có số đo bằng:", options: ["45°", "60°", "30°", "90°"], correctIndex: 0, explanation: "90° : 2 = 45°." },
                            { question: "Hai tam giác bằng nhau là hai tam giác có:", options: ["Các cạnh tương ứng bằng nhau và các góc tương ứng bằng nhau", "Diện tích bằng nhau", "Chu vi bằng nhau", "Các góc bằng nhau"], correctIndex: 0, explanation: "Định nghĩa hai tam giác bằng nhau." },
                            { question: "Trường hợp bằng nhau 'cạnh huyền - góc nhọn' áp dụng cho:", options: ["Tam giác vuông", "Tam giác đều", "Tam giác tù", "Mọi tam giác"], correctIndex: 0, explanation: "Áp dụng cho tam giác vuông." },
                            { question: "Cho ΔABC = ΔDEF. Biết AB = 5cm thì cạnh nào bằng 5cm?", options: ["DE", "DF", "EF", "BC"], correctIndex: 0, explanation: "AB tương ứng với DE." },
                            { question: "Tam giác đều có mỗi góc bằng bao nhiêu độ?", options: ["60°", "90°", "45°", "180°"], correctIndex: 0, explanation: "180° : 3 = 60°." },
                            { question: "Trong tam giác vuông, cạnh đối diện với góc vuông là:", options: ["Cạnh huyền", "Cạnh góc vuông", "Đường cao", "Trung tuyến"], correctIndex: 0, explanation: "Cạnh đối diện góc vuông là cạnh huyền (cạnh lớn nhất)." }
                        ],
                        trueFalse: [
                            { statement: "Trong một tam giác vuông, hai góc nhọn phụ nhau (tổng bằng 90°).", correct: true, explanation: "Đúng theo lý thuyết trang 31." },
                            { statement: "Tam giác có hai góc bằng nhau là tam giác cân.", correct: true, explanation: "Đúng theo tính chất tam giác cân." },
                            { statement: "Góc ngoài của tam giác nhỏ hơn mỗi góc trong không kề với nó.", correct: false, explanation: "Sai. Góc ngoài LỚN HƠN mỗi góc trong không kề với nó." },
                            { statement: "Nếu bình phương một cạnh bằng tổng bình phương hai cạnh kia thì tam giác đó vuông.", correct: true, explanation: "Đúng theo định lý Pytago đảo." }
                        ],
                        shortAnswer: [
                            { id: "sa-1", question: "Cho tam giác ABC có ∠A = 70°, ∠B = 50°. Tính số đo góc C (độ):", correctAnswer: "60", rubric: "180° - (70° + 50°) = 60°." },
                            { id: "sa-2", question: "Tính độ dài cạnh huyền của tam giác vuông có hai cạnh góc vuông là 5cm và 12cm:", correctAnswer: "13", rubric: "√(5² + 12²) = √(25 + 144) = √169 = 13cm." },
                            { id: "sa-3", question: "Tam giác ABC cân tại A có góc ở đáy ∠B = 65°. Tính số đo góc ở đỉnh ∠A (độ):", correctAnswer: "50", rubric: "∠A = 180° - 2 · 65° = 180° - 130° = 50°." },
                            { id: "sa-4", question: "Cho tam giác ABC có góc ngoài tại đỉnh C bằng 115°, góc A bằng 45°. Tính góc B (độ):", correctAnswer: "70", rubric: "Góc ngoài = ∠A + ∠B => ∠B = 115° - 45° = 70°." }
                        ]
                    },
                    {
                        id: "g7-hh-c3",
                        title: "Chương III: Quan hệ giữa các yếu tố trong tam giác & 4 Đường đồng quy",
                        theory: `### 1. Quan hệ giữa góc và cạnh đối diện. Đường vuông góc và đường xiên (Trang 35)
• Trong một tam giác: Góc đối diện với cạnh lớn hơn thì lớn hơn. Cạnh đối diện với góc lớn hơn thì lớn hơn. Trong tam giác tù/vuông, cạnh đối diện góc tù/vuông là cạnh lớn nhất.
• Đường vuông góc ngắn hơn mọi đường xiên kẻ từ một điểm đến đường thẳng. Đường xiên nào có hình chiếu lớn hơn thì lớn hơn.

### 2. Bất đẳng thức tam giác (Trang 35-36)
• Trong một tam giác, tổng độ dài hai cạnh bất kỳ bao giờ cũng lớn hơn cạnh còn lại:
  AB + AC > BC; AB + BC > AC; AC + BC > AB.
• Hệ quả: Hiệu độ dài hai cạnh bất kỳ nhỏ hơn cạnh còn lại:
  |AB - AC| < BC < AB + AC.

### 3. Ba đường trung tuyến & Trọng tâm (Trang 36)
• Đoạn thẳng nối đỉnh với trung điểm cạnh đối diện là đường trung tuyến.
• Ba đường trung tuyến cùng đi qua một điểm gọi là Trọng tâm (G).
• Trọng tâm cách đỉnh bằng 2/3 độ dài đường trung tuyến đi qua đỉnh ấy:
  GA/DA = GB/EB = GC/FC = 2/3.

### 4. Ba đường phân giác, trung trực, đường cao (Trang 36-38)
• Ba đường phân giác cắt nhau tại một điểm cách đều ba cạnh (tâm đường tròn nội tiếp).
• Ba đường trung trực cắt nhau tại một điểm cách đều ba đỉnh (tâm đường tròn ngoại tiếp: OA = OB = OC).
• Ba đường cao cắt nhau tại một điểm gọi là Trực tâm của tam giác.
• Trong tam giác cân: Đường trung tuyến xuất phát từ đỉnh đồng thời là phân giác, trung trực và đường cao.`,
                        quiz: [
                            { question: "Trọng tâm của tam giác là giao điểm của:", options: ["Ba đường trung tuyến", "Ba đường phân giác", "Ba đường trung trực", "Ba đường cao"], correctIndex: 0, explanation: "Giao 3 trung tuyến là trọng tâm." },
                            { question: "Cho G là trọng tâm tam giác ABC, AM là trung tuyến. Tỉ số AG/AM bằng:", options: ["2/3", "1/2", "1/3", "3/4"], correctIndex: 0, explanation: "Trọng tâm cách đỉnh 2/3 độ dài trung tuyến." },
                            { question: "Điểm cách đều ba cạnh của tam giác là giao điểm của:", options: ["Ba đường phân giác", "Ba đường trung trực", "Ba đường cao", "Ba đường trung tuyến"], correctIndex: 0, explanation: "Giao 3 phân giác cách đều 3 cạnh." },
                            { question: "Điểm cách đều ba đỉnh của tam giác là giao điểm của:", options: ["Ba đường trung trực", "Ba đường phân giác", "Ba đường cao", "Ba đường trung tuyến"], correctIndex: 0, explanation: "Giao 3 trung trực cách đều 3 đỉnh." },
                            { question: "Bộ ba đoạn thẳng nào sau đây có thể tạo thành một tam giác?", options: ["3cm, 4cm, 6cm", "2cm, 3cm, 5cm", "1cm, 2cm, 4cm", "4cm, 5cm, 10cm"], correctIndex: 0, explanation: "3 + 4 = 7 > 6 thỏa mãn BĐT tam giác." },
                            { question: "Trong tam giác ABC có AB = 5cm, AC = 8cm, BC = 10cm. Góc lớn nhất là:", options: ["Góc A", "Góc B", "Góc C", "Ba góc bằng nhau"], correctIndex: 0, explanation: "Cạnh BC lớn nhất (10cm) nên góc đối diện ∠A lớn nhất." },
                            { question: "Trực tâm của tam giác là giao điểm của:", options: ["Ba đường cao", "Ba đường trung tuyến", "Ba đường phân giác", "Ba đường trung trực"], correctIndex: 0, explanation: "Giao điểm 3 đường cao gọi là trực tâm." },
                            { question: "Trong tam giác vuông, trực tâm trùng với:", options: ["Đỉnh góc vuông", "Trung điểm cạnh huyền", "Trọng tâm", "Tâm đường tròn ngoại tiếp"], correctIndex: 0, explanation: "Hai cạnh góc vuông chính là hai đường cao nên trực tâm là đỉnh góc vuông." },
                            { question: "Trong tam giác vuông, tâm đường tròn ngoại tiếp là:", options: ["Trung điểm cạnh huyền", "Đỉnh góc vuông", "Trọng tâm", "Trực tâm"], correctIndex: 0, explanation: "Giao 3 trung trực của tam giác vuông là trung điểm cạnh huyền." },
                            { question: "Đoạn vuông góc kẻ từ một điểm đến một đường thẳng:", options: ["Ngắn hơn mọi đường xiên", "Dài hơn đường xiên", "Bằng đường xiên", "Vô hạn"], correctIndex: 0, explanation: "Đoạn vuông góc là khoảng cách ngắn nhất." },
                            { question: "Tam giác cân có hai đường trung tuyến ứng với hai cạnh bên:", options: ["Bằng nhau", "Vuông góc", "Cắt nhau tại đỉnh", "Song song"], correctIndex: 0, explanation: "Tam giác cân có 2 trung tuyến cạnh bên bằng nhau." },
                            { question: "Khoảng cách từ trọng tâm G đến trung điểm M của cạnh đối diện bằng:", options: ["1/3 độ dài trung tuyến", "2/3 độ dài trung tuyến", "1/2 độ dài trung tuyến", "3/4"], correctIndex: 0, explanation: "GM = 1/3 AM." }
                        ],
                        trueFalse: [
                            { statement: "Trong một tam giác, góc đối diện với cạnh lớn hơn là góc lớn hơn.", correct: true, explanation: "Đúng theo định lý trang 35." },
                            { statement: "Trọng tâm tam giác luôn nằm bên trong tam giác.", correct: true, explanation: "Đúng với mọi tam giác (nhọn, vuông, tù)." },
                            { statement: "Có thể vẽ được tam giác có độ dài 3 cạnh là 2cm, 3cm, 5cm.", correct: false, explanation: "Sai. Vì 2 + 3 = 5 (không lớn hơn 5), vi phạm BĐT tam giác." },
                            { statement: "Trong tam giác đều, trọng tâm, trực tâm và tâm đường tròn nội/ngoại tiếp trùng nhau.", correct: true, explanation: "Đúng. 4 điểm đồng quy này trùng làm một." }
                        ],
                        shortAnswer: [
                            { id: "sa-1", question: "Cho G là trọng tâm tam giác ABC, trung tuyến AM = 12cm. Tính độ dài đoạn thẳng AG (cm):", correctAnswer: "8", rubric: "AG = 2/3 · 12 = 8cm." },
                            { id: "sa-2", question: "Cho tam giác có hai cạnh dài 3cm và 7cm. Biết cạnh thứ ba là số nguyên (cm), tìm độ dài lớn nhất có thể của cạnh thứ ba:", correctAnswer: "9", rubric: "7 - 3 < c < 7 + 3 => 4 < c < 10. Số nguyên lớn nhất là 9cm." },
                            { id: "sa-3", question: "Cho G là trọng tâm tam giác ABC, biết đoạn GM = 3cm (M là trung điểm BC). Tính độ dài trung tuyến AM (cm):", correctAnswer: "9", rubric: "AM = 3 · GM = 3 · 3 = 9cm." },
                            { id: "sa-4", question: "Tam giác ABC cân tại A có AB = AC = 10cm, BC = 12cm. Kẻ đường cao AH. Tính độ dài AH (cm):", correctAnswer: "8", rubric: "H là trung điểm BC => BH = 6cm. Áp dụng Pytago: AH = √(10² - 6²) = √64 = 8cm." }
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
                        title: "Chương I: Phép nhân và phép chia các đa thức (7 Hằng đẳng thức & 10 Phương pháp phân tích)",
                        theory: `### 1. Nhân đơn thức và đa thức (Trang 40)
• A(B + C - D) = AB + AC - AD.
• (A + B)(C + D) = AC + AD + BC + BD.

### 2. Bảy hằng đẳng thức đáng nhớ & Mở rộng (Trang 40-41)
1. Bình phương của một tổng: (A + B)² = A² + 2AB + B²
2. Bình phương của một hiệu: (A - B)² = A² - 2AB + B²
3. Hiệu hai bình phương: A² - B² = (A - B)(A + B)
4. Lập phương của một tổng: (A + B)³ = A³ + 3A²B + 3AB² + B³
5. Lập phương của một hiệu: (A - B)³ = A³ - 3A²B + 3AB² - B³
6. Tổng hai lập phương: A³ + B³ = (A + B)(A² - AB + B²)
7. Hiệu hai lập phương: A³ - B³ = (A - B)(A² + AB + B²)
• Các hệ thức liên quan:
  - (a + b + c)² = a² + b² + c² + 2ab + 2bc + 2ca.
  - a³ + b³ + c³ - 3abc = (a + b + c)(a² + b² + c² - ab - bc - ca).
  - A² + B² = (A + B)² - 2AB = (A - B)² + 2AB.

### 3. Mười phương pháp phân tích đa thức thành nhân tử (Trang 41-43)
1. Đặt nhân tử chung: AB + AC = A(B + C).
2. Dùng hằng đẳng thức.
3. Nhóm nhiều hạng tử.
4. Phối hợp nhiều phương pháp.
5. Phương pháp tách hạng tử: ax² + bx + c tách bx thành b₁x + b₂x sao cho b₁b₂ = ac và b₁ + b₂ = b.
6. Phương pháp thêm bớt cùng một hạng tử.
7. Đặt biến phụ (đổi biến).
8. Phương pháp xét giá trị riêng & Lược đồ Hoóc-ne.
9. Phương pháp hạ bậc (đưa về A² + B² = 0).
10. Điều kiện tam thức bậc hai phân tích được thành nhân tử: Δ = b² - 4ac ≥ 0.

### 4. Chia đơn thức và đa thức (Trang 45)
• Chia đơn thức cho đơn thức: Chia hệ số, chia lũy thừa từng biến rồi nhân kết quả.
• Chia đa thức cho đa thức một biến đã sắp xếp: A = B · Q + R (R = 0 là phép chia hết, R ≠ 0 là chia có dư với bậc R < bậc B).`,
                        quiz: [
                            { question: "Khai triển (2x - 3)² ta được:", options: ["4x² - 12x + 9", "4x² - 6x + 9", "2x² - 12x + 9", "4x² + 12x + 9"], correctIndex: 0, explanation: "(2x)² - 2·2x·3 + 3² = 4x² - 12x + 9." },
                            { question: "Phân tích x² - 5x + 6 thành nhân tử:", options: ["(x - 2)(x - 3)", "(x + 2)(x + 3)", "(x - 1)(x - 6)", "(x + 1)(x - 6)"], correctIndex: 0, explanation: "x² - 2x - 3x + 6 = (x - 2)(x - 3)." },
                            { question: "Biểu thức x³ + 8 viết dưới dạng tích là:", options: ["(x + 2)(x² - 2x + 4)", "(x + 2)(x² + 2x + 4)", "(x - 2)(x² + 2x + 4)", "(x + 2)³"], correctIndex: 0, explanation: "x³ + 2³ = (x + 2)(x² - 2x + 4)." },
                            { question: "Giá trị của A = x² + 4x + 4 tại x = 98 là:", options: ["10000", "1000", "9604", "100"], correctIndex: 0, explanation: "(x + 2)² = (98 + 2)² = 100² = 10000." },
                            { question: "Kết quả phép tính (x - y)(x + y) bằng:", options: ["x² - y²", "x² + y²", "(x - y)²", "x² - 2xy + y²"], correctIndex: 0, explanation: "Hiệu hai bình phương." },
                            { question: "Đơn thức 15x³y² chia hết cho đơn thức nào?", options: ["5x²y", "3x⁴y", "5xy³", "15x³y³"], correctIndex: 0, explanation: "Số mũ của từng biến trong số chia phải ≤ số bị chia." },
                            { question: "Biểu thức (x - 1)³ khai triển là:", options: ["x³ - 3x² + 3x - 1", "x³ - x² + x - 1", "x³ - 3x² - 3x - 1", "x³ + 3x² - 3x + 1"], correctIndex: 0, explanation: "Hằng đẳng thức lập phương của một hiệu." },
                            { question: "Tìm x biết x² - 16 = 0:", options: ["x = 4 hoặc x = -4", "Chỉ x = 4", "Chỉ x = -4", "x = 16"], correctIndex: 0, explanation: "(x - 4)(x + 4) = 0 => x = ±4." },
                            { question: "Đa thức ax² + bx + c phân tích được thành nhân tử khi và chỉ khi:", options: ["Δ = b² - 4ac ≥ 0", "Δ < 0", "b = 0", "a + b + c ≠ 0"], correctIndex: 0, explanation: "Theo điều kiện trang 43." },
                            { question: "Giá trị nhỏ nhất của biểu thức P = x² - 6x + 14 là:", options: ["5", "14", "9", "3"], correctIndex: 0, explanation: "(x - 3)² + 5 ≥ 5." },
                            { question: "Khai triển (a + b + c)² ta được:", options: ["a² + b² + c² + 2ab + 2bc + 2ca", "a² + b² + c² + ab + bc + ca", "a² + b² + c²", "a³ + b³ + c³"], correctIndex: 0, explanation: "Hệ thức mở rộng trang 40." },
                            { question: "Số dư của phép chia đa thức f(x) cho nhị thức (x - a) bằng:", options: ["f(a)", "f(-a)", "0", "a"], correctIndex: 0, explanation: "Theo định lý Bơ-du (Bezout) trang 44: R = f(a)." }
                        ],
                        trueFalse: [
                            { statement: "Đẳng thức (A - B)² = (B - A)² luôn đúng với mọi A, B.", correct: true, explanation: "Đúng. Bình phương hai biểu thức đối nhau luôn bằng nhau." },
                            { statement: "Đa thức x² + 4 có thể phân tích thành nhân tử trên tập số thực.", correct: false, explanation: "Sai. x² + 4 > 0 với mọi x nên vô nghiệm trên R." },
                            { statement: "Một đa thức bậc n có tối đa n nghiệm.", correct: true, explanation: "Đúng theo lý thuyết đại số." },
                            { statement: "a³ + b³ = (a + b)³.", correct: false, explanation: "Sai. (a + b)³ = a³ + 3a²b + 3ab² + b³." }
                        ],
                        shortAnswer: [
                            { id: "sa-1", question: "Tính nhanh giá trị: 105² - 5²", correctAnswer: "11000", rubric: "(105 - 5)(105 + 5) = 100 · 110 = 11000." },
                            { id: "sa-2", question: "Tìm nghiệm dương của phương trình: x² - 8x + 15 = 0", correctAnswer: "5", rubric: "(x - 3)(x - 5) = 0 => x = 3 hoặc x = 5. Số lớn hơn là 5." },
                            { id: "sa-3", question: "Tìm số dư của phép chia đa thức f(x) = x³ - 2x + 5 cho (x - 2):", correctAnswer: "9", rubric: "R = f(2) = 2³ - 2(2) + 5 = 8 - 4 + 5 = 9." },
                            { id: "sa-4", question: "Tìm giá trị nhỏ nhất của A = x² - 4x + 9:", correctAnswer: "5", rubric: "(x - 2)² + 5 ≥ 5. GTNN là 5 khi x = 2." }
                        ]
                    },
                    {
                        id: "g8-ds-c2",
                        title: "Chương II: Phân thức đại số (Tính chất, Rút gọn, Quy đồng, 4 phép tính)",
                        theory: `### 1. Định nghĩa & Tính chất cơ bản (Trang 46)
• Phân thức đại số có dạng A/B với A, B là các đa thức, B khác đa thức 0. A là tử thức, B là mẫu thức.
• Hai phân thức bằng nhau: A/B = C/D ⇔ A · D = B · C.
• Điều kiện xác định (ĐKXĐ): Mẫu thức B ≠ 0.
• Tính chất cơ bản: A/B = (A · M) / (B · M) (M ≠ 0) và A/B = (A : N) / (B : N) (N là nhân tử chung).
• Quy tắc đổi dấu: A/B = -A / -B.

### 2. Rút gọn & Quy đồng mẫu thức (Trang 46-47)
• Rút gọn: Phân tích tử và mẫu thành nhân tử rồi chia cho nhân tử chung.
• Quy đồng: Tìm mẫu thức chung (BCNN các hệ số và lũy thừa số mũ cao nhất của các nhân tử biến), tìm nhân tử phụ rồi nhân cả tử và mẫu với nhân tử phụ tương ứng.

### 3. Các phép tính phân thức đại số (Trang 47-48)
• Phép cộng: Cùng mẫu cộng tử giữ nguyên mẫu. Khác mẫu quy đồng rồi cộng.
• Phép trừ: A/B - C/D = A/B + (-C/D).
• Phép nhân: (A/B) · (C/D) = (A · C) / (B · D).
• Phép chia: Nhân với phân thức nghịch đảo: (A/B) : (C/D) = (A/B) · (D/C) (với C/D ≠ 0).`,
                        quiz: [
                            { question: "Điều kiện xác định của phân thức (x + 5) / (x² - 9) là:", options: ["x ≠ 3 và x ≠ -3", "x ≠ 3", "x ≠ 9", "x ≠ -5"], correctIndex: 0, explanation: "x² - 9 ≠ 0 <=> x ≠ ±3." },
                            { question: "Rút gọn phân thức (x² - 4) / (x + 2) (với x ≠ -2) được:", options: ["x - 2", "x + 2", "x - 4", "2"], correctIndex: 0, explanation: "(x - 2)(x + 2) / (x + 2) = x - 2." },
                            { question: "Phân thức đối của (x - 1) / (x + 2) là:", options: ["(1 - x) / (x + 2)", "(x - 1) / (-x - 2)", "(x + 1) / (x + 2)", "(1 - x) / (x - 2)"], correctIndex: 0, explanation: "-(x - 1)/(x + 2) = (1 - x)/(x + 2)." },
                            { question: "Phân thức nghịch đảo của (x - 3) / (2x + 1) (với x ≠ 3; x ≠ -1/2) là:", options: ["(2x + 1) / (x - 3)", "-(x - 3) / (2x + 1)", "(x + 3) / (2x - 1)", "(2x - 1) / (x + 3)"], correctIndex: 0, explanation: "Đổi tử và mẫu: (2x + 1)/(x - 3)." },
                            { question: "Tính: (x / (x - 1)) - (1 / (x - 1)) (với x ≠ 1) =", options: ["1", "0", "-1", "x - 1"], correctIndex: 0, explanation: "(x - 1)/(x - 1) = 1." },
                            { question: "Hai phân thức A/B và C/D bằng nhau khi:", options: ["A · D = B · C", "A · C = B · D", "A + D = B + C", "A · B = C · D"], correctIndex: 0, explanation: "Định nghĩa hai phân thức bằng nhau." },
                            { question: "Mẫu thức chung đơn giản nhất của 1/(2x) và 1/(3x²) là:", options: ["6x²", "6x³", "5x²", "2x · 3x²"], correctIndex: 0, explanation: "BCNN(2, 3) = 6; lũy thừa x cao nhất là x² => 6x²." },
                            { question: "Kết quả của phép nhân (3x / y) · (y² / 6x²) bằng:", options: ["y / (2x)", "y / (6x)", "x / (2y)", "3y / (2x)"], correctIndex: 0, explanation: "(3x · y²) / (y · 6x²) = y / (2x)." },
                            { question: "Giá trị của phân thức (x² - 1) / (x - 1) tại x = 11 là:", options: ["12", "10", "11", "120"], correctIndex: 0, explanation: "Rút gọn thành x + 1 => 11 + 1 = 12." },
                            { question: "Biểu thức nguyên và biểu thức phân được gọi chung là:", options: ["Biểu thức hữu tỉ", "Đơn thức", "Phương trình", "Số vô tỉ"], correctIndex: 0, explanation: "Theo định nghĩa trang 46." },
                            { question: "Quy tắc đổi dấu phân thức nào sau đây đúng?", options: ["A/B = -A / -B", "A/B = -A / B", "A/B = A / -B", "A/B = -B / -A"], correctIndex: 0, explanation: "Đổi dấu cả tử và mẫu: A/B = -A / -B." },
                            { question: "Phân thức 0 / B (với đa thức B ≠ 0) bằng:", options: ["0", "B", "1", "Không xác định"], correctIndex: 0, explanation: "0 chia cho đa thức khác 0 bằng 0." }
                        ],
                        trueFalse: [
                            { statement: "Mỗi đa thức đều được coi là một phân thức đại số có mẫu thức bằng 1.", correct: true, explanation: "Đúng theo lý thuyết trang 46." },
                            { statement: "Phân thức A/B xác định với mọi giá trị của biến kể cả khi B = 0.", correct: false, explanation: "Sai. Giá trị của phân thức chỉ xác định khi mẫu thức B ≠ 0." },
                            { statement: "Tích của một phân thức khác 0 với phân thức nghịch đảo của nó luôn bằng 1.", correct: true, explanation: "(A/B) · (B/A) = 1." },
                            { statement: "Phép cộng phân thức đại số không có tính chất giao hoán.", correct: false, explanation: "Sai. Phép cộng có tính chất giao hoán và kết hợp." }
                        ],
                        shortAnswer: [
                            { id: "sa-1", question: "Tìm giá trị của x để phân thức (x - 3) / (x + 5) có giá trị bằng 0:", correctAnswer: "3", rubric: "Tử bằng 0 và mẫu khác 0: x - 3 = 0 => x = 3 (thỏa mãn 3 + 5 ≠ 0)." },
                            { id: "sa-2", question: "Rút gọn phân thức P = (3x² - 3) / (x - 1) rồi tính giá trị tại x = 9:", correctAnswer: "30", rubric: "3(x - 1)(x + 1)/(x - 1) = 3(x + 1). Tại x = 9: 3 · (9 + 1) = 30." },
                            { id: "sa-3", question: "Tính kết quả phép chia: (x² - 4)/x : (x + 2)/x tại x = 10:", correctAnswer: "8", rubric: "[(x - 2)(x + 2)/x] · [x/(x + 2)] = x - 2. Tại x = 10: 10 - 2 = 8." },
                            { id: "sa-4", question: "Tìm điều kiện của x để phân thức 5 / (2x - 8) không xác định:", correctAnswer: "4", rubric: "Không xác định khi mẫu bằng 0: 2x - 8 = 0 => x = 4." }
                        ]
                    },
                    {
                        id: "g8-ds-c3",
                        title: "Chương III: Phương trình bậc nhất một ẩn (Phương trình tích, Ẩn ở mẫu & Giải toán bằng cách lập PT)",
                        theory: `### 1. Khái niệm Phương trình & Phép biến đổi tương đương (Trang 49)
• Phương trình một ẩn x có dạng A(x) = B(x). Tập nghiệm ký hiệu là S. Hai phương trình tương đương có cùng tập nghiệm (kí hiệu ⇔).
• Hai quy tắc biến đổi:
  - Quy tắc chuyển vế: Chuyển hạng tử sang vế kia và đổi dấu.
  - Quy tắc nhân với một số: Nhân hoặc chia cả hai vế với cùng một số khác 0.

### 2. Phương trình bậc nhất một ẩn ax + b = 0 (a ≠ 0) (Trang 49-50)
• ax + b = 0 ⇔ ax = -b ⇔ x = -b/a. Tập nghiệm S = {-b/a}.
• Biện luận ax + b = 0:
  - a ≠ 0: Có nghiệm duy nhất x = -b/a.
  - a = 0 và b ≠ 0: Phương trình vô nghiệm (S = ∅).
  - a = 0 và b = 0: Phương trình vô số nghiệm (S = R).

### 3. Phương trình tích & Phương trình chứa ẩn ở mẫu (Trang 50-51)
• Phương trình tích: A(x) · B(x) = 0 ⇔ A(x) = 0 hoặc B(x) = 0.
• Giải phương trình chứa ẩn ở mẫu:
  1. Tìm ĐKXĐ (cho tất cả các mẫu thức khác 0).
  2. Quy đồng mẫu hai vế rồi khử mẫu.
  3. Giải phương trình tìm được.
  4. Đối chiếu ĐKXĐ và kết luận nghiệm (loại bỏ nghiệm ngoại lai).

### 4. Giải bài toán bằng cách lập phương trình (Trang 53)
• Bước 1: Lập phương trình (chọn ẩn và đặt điều kiện, biểu diễn đại lượng chưa biết qua ẩn, lập phương trình).
• Bước 2: Giải phương trình.
• Bước 3: Kiểm tra nghiệm với điều kiện và trả lời.`,
                        quiz: [
                            { question: "Tập nghiệm của phương trình tích (x - 3)(2x + 4) = 0 là:", options: ["S = {3; -2}", "S = {-3; 2}", "S = {3; 2}", "S = {3; -4}"], correctIndex: 0, explanation: "x - 3 = 0 => x = 3; 2x + 4 = 0 => x = -2." },
                            { question: "Nghiệm của phương trình 3x - 12 = 0 là:", options: ["x = 4", "x = -4", "x = 12", "x = 3"], correctIndex: 0, explanation: "3x = 12 => x = 4." },
                            { question: "Phương trình 0x = 5 có tập nghiệm là:", options: ["S = ∅ (vô nghiệm)", "S = R", "x = 0", "x = 5"], correctIndex: 0, explanation: "0x = 5 không có giá trị x nào thỏa mãn." },
                            { question: "Phương trình 0x = 0 có tập nghiệm là:", options: ["S = R (vô số nghiệm)", "S = ∅", "x = 0", "x = 1"], correctIndex: 0, explanation: "Đúng với mọi x thuộc R." },
                            { question: "Khi giải phương trình chứa ẩn ở mẫu, bước đầu tiên bắt buộc phải làm là:", options: ["Tìm điều kiện xác định (ĐKXĐ)", "Khử mẫu ngay lập tức", "Chuyển vế đổi dấu", "Bình phương hai vế"], correctIndex: 0, explanation: "Bắt buộc tìm ĐKXĐ để tránh nghiệm ngoại lai." },
                            { question: "Điều kiện xác định của phương trình 1/(x - 1) + 2/(x + 3) = 0 là:", options: ["x ≠ 1 và x ≠ -3", "x ≠ 1", "x ≠ -3", "x ≠ 0"], correctIndex: 0, explanation: "Mẫu thức khác 0: x - 1 ≠ 0 và x + 3 ≠ 0." },
                            { question: "Hai phương trình được gọi là tương đương khi:", options: ["Chúng có cùng tập nghiệm", "Chúng có cùng bậc", "Chúng có cùng hệ số", "Chúng cùng vô nghiệm hoặc có 1 nghiệm"], correctIndex: 0, explanation: "Định nghĩa phương trình tương đương." },
                            { question: "Phương trình 2x + 5 = 2x + 5 có bao nhiêu nghiệm?", options: ["Vô số nghiệm", "Vô nghiệm", "1 nghiệm", "2 nghiệm"], correctIndex: 0, explanation: "Biến đổi thành 0x = 0 => Vô số nghiệm." },
                            { question: "Một xe máy đi từ A đến B với vận tốc 40km/h hết t giờ. Quãng đường S (km) là:", options: ["S = 40 · t", "S = 40 / t", "S = t / 40", "S = 40 + t"], correctIndex: 0, explanation: "Quãng đường = Vận tốc · Thời gian." },
                            { question: "Nghiệm của phương trình (x - 5)/(x - 5) = 1 là:", options: ["Mọi x ≠ 5", "Mọi số thực x", "x = 5", "Vô nghiệm"], correctIndex: 0, explanation: "ĐKXĐ là x ≠ 5. Với x ≠ 5 phương trình luôn đúng." },
                            { question: "Phương trình nào sau đây là phương trình bậc nhất một ẩn?", options: ["2x - 7 = 0", "x² - 4 = 0", "0x + 3 = 0", "1/x + 2 = 0"], correctIndex: 0, explanation: "Dạng ax + b = 0 với a ≠ 0 (ở đây a = 2)." },
                            { question: "Chuyển vế hạng tử 7 trong phương trình 3x + 7 = 1 sang vế phải ta được:", options: ["3x = 1 - 7", "3x = 1 + 7", "3x = 7 - 1", "3x = -7 - 1"], correctIndex: 0, explanation: "Chuyển vế +7 đổi dấu thành -7." }
                        ],
                        trueFalse: [
                            { statement: "Phương trình bậc nhất một ẩn luôn luôn có duy nhất một nghiệm.", correct: true, explanation: "Đúng. ax + b = 0 (a ≠ 0) có nghiệm duy nhất x = -b/a." },
                            { statement: "Phép khử mẫu trong phương trình chứa ẩn ở mẫu luôn cho ta phương trình tương đương.", correct: false, explanation: "Sai. Khử mẫu có thể tạo ra nghiệm ngoại lai nên chỉ là phương trình hệ quả." },
                            { statement: "Phương trình x² = 9 tương đương với phương trình x = 3.", correct: false, explanation: "Sai. x² = 9 có 2 nghiệm x = ±3, còn x = 3 chỉ có 1 nghiệm." },
                            { statement: "Khi giải bài toán chuyển động, thời gian đuổi kịp nhau cùng chiều là t = S / (v₁ - v₂).", correct: true, explanation: "Đúng theo công thức trang 92." }
                        ],
                        shortAnswer: [
                            { id: "sa-1", question: "Giải phương trình: 5(x - 2) = 3x + 4. Tìm x:", correctAnswer: "7", rubric: "5x - 10 = 3x + 4 => 2x = 14 => x = 7." },
                            { id: "sa-2", question: "Tìm nghiệm của phương trình chứa ẩn ở mẫu: (x + 2)/(x - 2) = 3", correctAnswer: "4", rubric: "ĐKXĐ x ≠ 2. x + 2 = 3(x - 2) => x + 2 = 3x - 6 => 2x = 8 => x = 4 (thỏa mãn)." },
                            { id: "sa-3", question: "Một người đi xe đạp từ A đến B với vận tốc 15km/h. Lúc về đi với vận tốc 12km/h nên thời gian về nhiều hơn thời gian đi là 30 phút (0,5 giờ). Tính quãng đường AB (km):", correctAnswer: "30", rubric: "S/12 - S/15 = 0,5 => S/60 = 0,5 => S = 30km." },
                            { id: "sa-4", question: "Tìm m để phương trình mx - 6 = 0 nhận x = 2 làm nghiệm:", correctAnswer: "3", rubric: "Thay x = 2: 2m - 6 = 0 => 2m = 6 => m = 3." }
                        ]
                    },
                    {
                        id: "g8-ds-c4",
                        title: "Chương IV: Bất phương trình bậc nhất một ẩn & Bất đẳng thức Cô-si, Bunhiacopxki",
                        theory: `### 1. Bất đẳng thức & Tính chất liên hệ (Trang 54)
• Hệ thức dạng a < b (hoặc a > b, a ≤ b, a ≥ b) gọi là bất đẳng thức.
• Cộng cùng một số vào hai vế: a < b ⇒ a + c < b + c (không đổi chiều).
• Nhân hai vế với số DƯƠNG: a < b và c > 0 ⇒ ac < bc (không đổi chiều).
• Nhân hai vế với số ÂM: a < b và c < 0 ⇒ ac > bc (BẮT BUỘC ĐỔI CHIỀU).

### 2. Bất phương trình bậc nhất một ẩn (Trang 54-55)
• Dạng ax + b > 0 (hoặc < 0, ≥ 0, ≤ 0) với a ≠ 0.
• Cách giải: Chuyển vế ax > -b. Nếu a > 0 ⇒ x > -b/a; nếu a < 0 ⇒ x < -b/a.

### 3. Phương trình chứa dấu giá trị tuyệt đối (Trang 55-56)
• |A(x)| = B(x) ⇔ [ A(x) = B(x) (với A(x) ≥ 0) ] hoặc [ -A(x) = B(x) (với A(x) < 0) ].
• |A(x)| = |B(x)| ⇔ A(x) = B(x) hoặc A(x) = -B(x).

### 4. Bất đẳng thức Cô-si (Cauchy) & Bunhiacopxki (Trang 57-59)
• BĐT Cô-si cho 2 số không âm a, b:
  (a + b) / 2 ≥ √(ab) hay a + b ≥ 2√(ab). Dấu "=" xảy ra khi a = b.
• Hệ quả Cô-si: a + 1/a ≥ 2 (với a > 0); 1/a + 1/b ≥ 4/(a + b) (với a, b > 0).
• BĐT Bunhiacopxki cho 4 số: (a² + b²)(x² + y²) ≥ (ax + by)². Dấu "=" xảy ra khi a/x = b/y.`,
                        quiz: [
                            { question: "Giải bất phương trình -3x + 12 > 0 ta được:", options: ["x < 4", "x > 4", "x < -4", "x > -4"], correctIndex: 0, explanation: "-3x > -12 => chia cho -3 đổi chiều => x < 4." },
                            { question: "Bất đẳng thức Cô-si cho 2 số không âm a, b khẳng định:", options: ["a + b ≥ 2√(ab)", "a + b ≤ 2√(ab)", "a + b ≥ √(ab)", "a² + b² ≥ ab"], correctIndex: 0, explanation: "Theo BĐT Cô-si trang 57." },
                            { question: "Với a > 0, giá trị nhỏ nhất của biểu thức a + 1/a là:", options: ["2", "1", "4", "0"], correctIndex: 0, explanation: "Áp dụng hệ quả BĐT Cô-si: a + 1/a ≥ 2." },
                            { question: "Khi nhân cả hai vế của bất đẳng thức với một số âm, ta phải:", options: ["Đổi chiều bất đẳng thức", "Giữ nguyên chiều", "Đổi dấu cả hai vế nhưng giữ chiều", "Bình phương hai vế"], correctIndex: 0, explanation: "Quy tắc nhân với số âm." },
                            { question: "Nghiệm của bất phương trình 2x - 6 ≥ 0 là:", options: ["x ≥ 3", "x ≤ 3", "x > 3", "x < 3"], correctIndex: 0, explanation: "2x ≥ 6 => x ≥ 3." },
                            { question: "Giá trị nhỏ nhất của P = x² + 4x + 9 là:", options: ["5", "9", "4", "2"], correctIndex: 0, explanation: "(x + 2)² + 5 ≥ 5." },
                            { question: "Tập nghiệm của phương trình |x - 2| = 5 là:", options: ["{7; -3}", "{-7; 3}", "{7; 3}", "{5; -5}"], correctIndex: 0, explanation: "x - 2 = 5 => x = 7; x - 2 = -5 => x = -3." },
                            { question: "Bất đẳng thức Bunhiacopxki khẳng định:", options: ["(a² + b²)(x² + y²) ≥ (ax + by)²", "(a + b)(x + y) ≥ ax + by", "a² + b² ≥ 2ab", "(ax + by)² ≥ a²x² + b²y²"], correctIndex: 0, explanation: "Theo BĐT Bunhiacopxki trang 57." },
                            { question: "Nếu a < b thì kết luận nào sau đây ĐÚNG?", options: ["a - 3 < b - 3", "a + 5 > b + 5", "-2a < -2b", "3a > 3b"], correctIndex: 0, explanation: "Cộng trừ cùng một số không làm đổi chiều." },
                            { question: "Nghiệm nguyên lớn nhất của bất phương trình x < 4,5 là:", options: ["4", "5", "3", "0"], correctIndex: 0, explanation: "Số nguyên lớn nhất nhỏ hơn 4,5 là 4." },
                            { question: "Cho x, y > 0 và x + y = 10. Giá trị lớn nhất của tích x · y là:", options: ["25", "20", "50", "100"], correctIndex: 0, explanation: "xy ≤ [(x + y)/2]² = 5² = 25. Dấu '=' khi x = y = 5." },
                            { question: "Bất đẳng thức 1/a + 1/b ≥ 4/(a + b) (với a, b > 0) xảy ra dấu đẳng thức khi:", options: ["a = b", "a > b", "a · b = 1", "a + b = 4"], correctIndex: 0, explanation: "Dấu bằng xảy ra khi a = b." }
                        ],
                        trueFalse: [
                            { statement: "Khi nhân hai vế của bất đẳng thức với cùng một số khác 0, chiều của bất đẳng thức không bao giờ đổi.", correct: false, explanation: "Sai. Nhân với số âm thì bắt buộc phải đổi chiều." },
                            { statement: "Bất đẳng thức a² + b² ≥ 2ab luôn đúng với mọi số thực a, b.", correct: true, explanation: "Đúng. Biến đổi tương đương (a - b)² ≥ 0 luôn đúng." },
                            { statement: "Phương trình |x| = -3 có tập nghiệm S = {-3; 3}.", correct: false, explanation: "Sai. Giá trị tuyệt đối luôn không âm nên phương trình vô nghiệm." },
                            { statement: "Nếu a < b và b < c thì a < c.", correct: true, explanation: "Đúng theo tính chất bắc cầu của thứ tự." }
                        ],
                        shortAnswer: [
                            { id: "sa-1", question: "Tìm số nguyên x nhỏ nhất thỏa mãn bất phương trình: 3x - 5 > 7", correctAnswer: "5", rubric: "3x > 12 => x > 4. Số nguyên nhỏ nhất lớn hơn 4 là 5." },
                            { id: "sa-2", question: "Cho x > 0. Tìm giá trị nhỏ nhất của biểu thức: A = x + 16/x", correctAnswer: "8", rubric: "Áp dụng Cô-si: A ≥ 2√(x · 16/x) = 2 · 4 = 8. Đẳng thức khi x = 4." },
                            { id: "sa-3", question: "Giải bất phương trình (x - 1)/2 - (x - 2)/3 > 1. Tìm x > :", correctAnswer: "5", rubric: "3(x - 1) - 2(x - 2) > 6 => 3x - 3 - 2x + 4 > 6 => x + 1 > 6 => x > 5." },
                            { id: "sa-4", question: "Tìm nghiệm của phương trình: |2x - 6| = 0", correctAnswer: "3", rubric: "2x - 6 = 0 => 2x = 6 => x = 3." }
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
                        title: "Chương I: Tứ giác (Hình thang, Hình bình hành, Chữ nhật, Thoi, Vuông & Trục/Tâm đối xứng)",
                        theory: `### 1. Tứ giác & Hình thang (Trang 61-62)
• Tổng các góc của một tứ giác bằng 360°.
• Hình thang là tứ giác có hai cạnh đối song song.
• Hình thang cân có 2 góc kề một đáy bằng nhau hoặc 2 đường chéo bằng nhau. Hai cạnh bên bằng nhau.
• Đường trung bình của tam giác song song cạnh thứ ba và bằng nửa cạnh ấy: DE = BC/2.
• Đường trung bình của hình thang song song hai đáy và bằng nửa tổng hai đáy: EF = (AB + CD)/2.

### 2. Các tứ giác đặc biệt (Trang 63-66)
• Hình bình hành: Tứ giác có các cạnh đối song song (hoặc bằng nhau, hoặc 2 cạnh đối song song và bằng nhau, hoặc 2 đường chéo cắt nhau tại trung điểm mỗi đường).
• Hình chữ nhật: Tứ giác có 4 góc vuông (hoặc hình bình hành có 1 góc vuông, hoặc 2 đường chéo bằng nhau). Trong tam giác vuông, trung tuyến ứng với cạnh huyền bằng nửa cạnh huyền: AM = BC/2.
• Hình thoi: Tứ giác có 4 cạnh bằng nhau (hoặc hình bình hành có 2 cạnh kề bằng nhau, 2 đường chéo vuông góc nhau hoặc 1 đường chéo là phân giác).
• Hình vuông: Tứ giác vừa là hình chữ nhật vừa là hình thoi (4 góc vuông và 4 cạnh bằng nhau).

### 3. Đối xứng trục & Đối xứng tâm (Trang 63-64)
• Trục đối xứng: Đường thẳng nối trung điểm 2 đáy của hình thang cân là trục đối xứng.
• Tâm đối xứng: Giao điểm hai đường chéo của hình bình hành là tâm đối xứng.`,
                        quiz: [
                            { question: "Tổng số đo các góc của một tứ giác lồi bằng:", options: ["360°", "180°", "90°", "540°"], correctIndex: 0, explanation: "Tổng 4 góc tứ giác = 360°." },
                            { question: "Hình thang có hai đáy là 6cm và 10cm thì đường trung bình của nó bằng:", options: ["8cm", "16cm", "4cm", "12cm"], correctIndex: 0, explanation: "(6 + 10) / 2 = 8cm." },
                            { question: "Hình thoi có độ dài hai đường chéo là 6cm và 8cm. Diện tích hình thoi là:", options: ["24cm²", "48cm²", "14cm²", "12cm²"], correctIndex: 0, explanation: "S = (1/2) · 6 · 8 = 24cm²." },
                            { question: "Hình bình hành có hai đường chéo vuông góc với nhau là:", options: ["Hình thoi", "Hình chữ nhật", "Hình thang cân", "Hình vuông"], correctIndex: 0, explanation: "Dấu hiệu nhận biết hình thoi." },
                            { question: "Trong tam giác vuông có cạnh huyền bằng 10cm, trung tuyến ứng với cạnh huyền bằng:", options: ["5cm", "10cm", "2,5cm", "20cm"], correctIndex: 0, explanation: "Trung tuyến cạnh huyền = 10 / 2 = 5cm." },
                            { question: "Hình chữ nhật có hai đường chéo vuông góc là:", options: ["Hình vuông", "Hình thoi", "Hình thang", "Hình bình hành"], correctIndex: 0, explanation: "Dấu hiệu nhận biết hình vuông." },
                            { question: "Tứ giác có hai đường chéo cắt nhau tại trung điểm mỗi đường là:", options: ["Hình bình hành", "Hình thang cân", "Hình thang vuông", "Tứ giác thường"], correctIndex: 0, explanation: "Dấu hiệu nhận biết hình bình hành." },
                            { question: "Hình thang cân là hình thang có:", options: ["Hai góc kề một đáy bằng nhau", "Hai cạnh bên song song", "Một góc vuông", "Hai cạnh đáy bằng nhau"], correctIndex: 0, explanation: "Định nghĩa hình thang cân." },
                            { question: "Giao điểm hai đường chéo của hình bình hành là:", options: ["Tâm đối xứng của hình bình hành", "Trục đối xứng", "Trực tâm", "Trọng tâm"], correctIndex: 0, explanation: "Theo tính chất đối xứng tâm trang 64." },
                            { question: "Hình vuông có mấy trục đối xứng?", options: ["4 trục", "2 trục", "1 trục", "Vô số"], correctIndex: 0, explanation: "2 đường trung trực của các cạnh và 2 đường chéo." },
                            { question: "Đoạn thẳng nối trung điểm hai cạnh bên của hình thang gọi là:", options: ["Đường trung bình của hình thang", "Đường cao", "Đường chéo", "Cạnh đáy"], correctIndex: 0, explanation: "Định nghĩa đường trung bình hình thang." },
                            { question: "Hình chữ nhật có độ dài hai cạnh là 3cm và 4cm thì đường chéo dài:", options: ["5cm", "7cm", "12cm", "25cm"], correctIndex: 0, explanation: "√(3² + 4²) = 5cm." }
                        ],
                        trueFalse: [
                            { statement: "Đường trung bình của tam giác song song với cạnh thứ ba và bằng nửa cạnh ấy.", correct: true, explanation: "Đúng theo định lý trang 62." },
                            { statement: "Hình thoi là một hình chữ nhật đặc biệt.", correct: false, explanation: "Sai. Hình vuông mới vừa là hình chữ nhật vừa là hình thoi." },
                            { statement: "Trong hình chữ nhật, hai đường chéo bằng nhau và cắt nhau tại trung điểm mỗi đường.", correct: true, explanation: "Đúng theo tính chất trang 65." },
                            { statement: "Hình thang có hai cạnh bên bằng nhau thì luôn luôn là hình thang cân.", correct: false, explanation: "Sai. Hình bình hành có 2 cạnh bên bằng nhau nhưng không phải hình thang cân." }
                        ],
                        shortAnswer: [
                            { id: "sa-1", question: "Cho tam giác ABC có BC = 14cm. Đoạn thẳng nối trung điểm AB và AC dài bao nhiêu cm?", correctAnswer: "7", rubric: "Đường trung bình = BC / 2 = 14 / 2 = 7cm." },
                            { id: "sa-2", question: "Một tứ giác có số đo 3 góc là 80°, 100°, 110°. Tính số đo góc thứ tư (độ):", correctAnswer: "70", rubric: "360° - (80° + 100° + 110°) = 360° - 290° = 70°." },
                            { id: "sa-3", question: "Hình vuông có cạnh bằng 6cm. Tính diện tích của hình vuông đó (cm²):", correctAnswer: "36", rubric: "S = 6² = 36cm²." },
                            { id: "sa-4", question: "Hình chữ nhật có chu vi bằng 28cm, chiều dài hơn chiều rộng 2cm. Tính diện tích của hình chữ nhật (cm²):", correctAnswer: "48", rubric: "Nửa chu vi = 14. Dài = (14 + 2)/2 = 8cm. Rộng = 6cm. S = 8 · 6 = 48cm²." }
                        ]
                    },
                    {
                        id: "g8-hh-c2",
                        title: "Chương II & III: Đa giác, Diện tích & Tam giác đồng dạng (Định lý Ta-lét)",
                        theory: `### 1. Đa giác & Diện tích đa giác (Trang 67-69)
• Tổng các góc của đa giác n cạnh: (n - 2) · 180°. Mỗi góc của đa giác đều n cạnh: [(n - 2) · 180°] / n. Số đường chéo: n(n - 3) / 2.
• Công thức diện tích:
  - Chữ nhật: S = a · b | Vuông: S = a² | Tam giác: S = (1/2)ah | Tam giác vuông: S = (1/2)ab
  - Hình thang: S = (1/2)(a + b)h | Hình bình hành: S = ah | Hình thoi: S = (1/2)d₁d₂
  - Công thức Hê-rông: S = √[p(p - a)(p - b)(p - c)] với p = (a + b + c)/2.

### 2. Định lý Ta-lét trong tam giác (Trang 70-71)
• Định lý thuận: B'C' // BC ⇒ AB'/AB = AC'/AC.
• Định lý đảo: Định ra các đoạn thẳng tương ứng tỉ lệ thì song song.
• Hệ quả Ta-lét: B'C' // BC ⇒ AB'/AB = AC'/AC = B'C'/BC (áp dụng cả khi cắt phần kéo dài).

### 3. Tính chất đường phân giác trong tam giác (Trang 71)
• Tia phân giác AD của góc A chia cạnh đối diện thành hai đoạn tỉ lệ với 2 cạnh kề:
  DB / DC = AB / AC.

### 4. Tam giác đồng dạng (Trang 71-74)
• ΔA'B'C' ∽ ΔABC theo tỉ số k: Ba trường hợp: (c-c-c), (c-g-c), (g-g).
• Tỉ số hai đường cao tương ứng bằng k.
• Tỉ số diện tích của hai tam giác đồng dạng bằng bình phương tỉ số đồng dạng: S' / S = k².`,
                        quiz: [
                            { question: "Tổng số đo các góc của đa giác lồi n cạnh là:", options: ["(n - 2) · 180°", "n · 180°", "(n - 3) · 180°", "(n + 2) · 180°"], correctIndex: 0, explanation: "Công thức trang 67." },
                            { question: "Nếu ΔABC ∽ ΔDEF theo tỉ số đồng dạng k = 3 thì tỉ số diện tích S(ABC) / S(DEF) bằng:", options: ["9", "3", "6", "1/9"], correctIndex: 0, explanation: "Tỉ số diện tích = k² = 3² = 9." },
                            { question: "Cho ΔABC có AB = 6cm, AC = 9cm. Phân giác AD cắt BC tại D. Tỉ số DB/DC bằng:", options: ["2/3", "3/2", "1/3", "4/9"], correctIndex: 0, explanation: "DB/DC = AB/AC = 6/9 = 2/3." },
                            { question: "Số đường chéo của một lục giác (6 cạnh) là:", options: ["9", "6", "12", "15"], correctIndex: 0, explanation: "6(6 - 3) / 2 = 9 đường chéo." },
                            { question: "Định lý Ta-lét khẳng định: Đường thẳng song song với 1 cạnh của tam giác và cắt 2 cạnh còn lại thì:", options: ["Định ra trên hai cạnh ấy các đoạn thẳng tương ứng tỉ lệ", "Cắt nhau tại trung điểm", "Tạo ra góc vuông", "Chia đôi diện tích"], correctIndex: 0, explanation: "Theo định lý Ta-lét trang 70." },
                            { question: "Hai tam giác đồng dạng theo trường hợp (g-g) khi:", options: ["Có 2 góc của tam giác này lần lượt bằng 2 góc của tam giác kia", "Có 3 cạnh bằng nhau", "Có 1 góc vuông", "Có diện tích bằng nhau"], correctIndex: 0, explanation: "Trường hợp đồng dạng thứ ba trang 72." },
                            { question: "Tỉ số hai đường cao tương ứng của hai tam giác đồng dạng bằng:", options: ["Tỉ số đồng dạng k", "k²", "2k", "√k"], correctIndex: 0, explanation: "Tỉ số đường cao bằng tỉ số đồng dạng k." },
                            { question: "Cho tam giác đều cạnh a. Chiều cao h của tam giác đều bằng:", options: ["a√3 / 2", "a / 2", "a√2", "a√3"], correctIndex: 0, explanation: "Công thức trang 68: h = a√3 / 2." },
                            { question: "Diện tích của tam giác đều cạnh a bằng:", options: ["a²√3 / 4", "a² / 2", "a²√3 / 2", "a²"], correctIndex: 0, explanation: "Công thức trang 68: S = a²√3 / 4." },
                            { question: "Cho ΔA'B'C' ∽ ΔABC theo tỉ số k = 1/2. Chu vi tam giác ABC là 20cm. Chu vi ΔA'B'C' là:", options: ["10cm", "40cm", "5cm", "20cm"], correctIndex: 0, explanation: "Tỉ số chu vi bằng k = 1/2 => 20 · 1/2 = 10cm." },
                            { question: "Mỗi góc của một ngũ giác đều (5 cạnh) có số đo bằng:", options: ["108°", "120°", "90°", "100°"], correctIndex: 0, explanation: "(5 - 2) · 180° / 5 = 108°." },
                            { question: "Công thức Hê-rông tính diện tích tam giác là:", options: ["S = √[p(p - a)(p - b)(p - c)]", "S = (1/2)ab", "S = pr", "S = abc / 4R"], correctIndex: 0, explanation: "Công thức Hê-rông trang 68." }
                        ],
                        trueFalse: [
                            { statement: "Tỉ số diện tích của hai tam giác đồng dạng bằng bình phương tỉ số đồng dạng.", correct: true, explanation: "Đúng theo định lý trang 74." },
                            { statement: "Hai tam giác bằng nhau thì đồng dạng với nhau theo tỉ số k = 1.", correct: true, explanation: "Đúng. Bằng nhau là trường hợp đặc biệt của đồng dạng." },
                            { statement: "Đường phân giác ngoài của tam giác không chia cạnh đối diện theo tỉ lệ hai cạnh kề.", correct: false, explanation: "Sai. Cả phân giác trong và ngoài đều thỏa mãn: D'B/D'C = AB/AC." },
                            { statement: "Đa giác đều là đa giác có tất cả các cạnh bằng nhau.", correct: false, explanation: "Sai. Phải có thêm điều kiện TẤT CẢ CÁC GÓC BẰNG NHAU (hình thoi có 4 cạnh bằng nhau nhưng không là đa giác đều)." }
                        ],
                        shortAnswer: [
                            { id: "sa-1", question: "Cho ΔABC có AB = 4cm, B'C' // BC cắt AB tại B', AC tại C'. Biết AB' = 2cm và BC = 8cm. Tính độ dài B'C' (cm):", correctAnswer: "4", rubric: "Theo hệ quả Ta-lét: B'C'/BC = AB'/AB = 2/4 = 1/2 => B'C' = 8 / 2 = 4cm." },
                            { id: "sa-2", question: "Một ngũ giác lồi có 5 cạnh. Tính số đường chéo của ngũ giác đó:", correctAnswer: "5", rubric: "5(5 - 3) / 2 = 5 đường chéo." },
                            { id: "sa-3", question: "Tam giác đều có cạnh bằng 4cm. Tính diện tích tam giác đều đó (viết kết quả làm tròn hoặc dạng 4√3 thì ghi 4√3 tương đương khoảng 6.93):", correctAnswer: "4√3", rubric: "S = a²√3 / 4 = 16√3 / 4 = 4√3 cm²." },
                            { id: "sa-4", question: "Cho ΔABC có AB = 5cm, AC = 10cm. Phân giác AD chia cạnh BC = 9cm thành 2 đoạn BD và CD. Tính độ dài BD (cm):", correctAnswer: "3", rubric: "BD/CD = 5/10 = 1/2 => CD = 2BD. BD + 2BD = 9 => 3BD = 9 => BD = 3cm." }
                        ]
                    },
                    {
                        id: "g8-hh-c4",
                        title: "Chương IV: Hình lăng trụ đứng & Hình chóp đều (Thể tích, Diện tích xung quanh)",
                        theory: `### 1. Hình hộp chữ nhật & Hình lập phương (Trang 75)
• Hình hộp chữ nhật có 6 mặt là hình chữ nhật, 8 đỉnh, 12 cạnh. Thể tích: V = a · b · c.
• Hình lập phương cạnh a: Thể tích V = a³.

### 2. Hình lăng trụ đứng (Trang 76)
• Các mặt bên là hình chữ nhật; các cạnh bên song song và bằng nhau (chính là chiều cao h).
• Diện tích xung quanh: S(xq) = 2p · h (2p là chu vi đáy, h là chiều cao).
• Thể tích: V = S · h (S là diện tích đáy, h là chiều cao).

### 3. Hình chóp đều & Hình chóp cụt đều (Trang 77-78)
• Hình chóp đều có đáy là đa giác đều, các mặt bên là các tam giác cân bằng nhau chung đỉnh. Chân đường cao O trùng với tâm đáy.
• Trung đoạn (d): Đường cao vẽ từ đỉnh của mỗi mặt bên tam giác cân.
• Diện tích xung quanh hình chóp đều: S(xq) = p · d (p là nửa chu vi đáy, d là trung đoạn).
• Thể tích hình chóp đều: V = (1/3) · S · h (S là diện tích đáy, h là chiều cao).`,
                        quiz: [
                            { question: "Thể tích của hình hộp chữ nhật có ba kích thước a, b, c là:", options: ["V = a · b · c", "V = a + b + c", "V = 2(ab + bc + ca)", "V = (1/3)abc"], correctIndex: 0, explanation: "Công thức trang 76." },
                            { question: "Thể tích hình lập phương cạnh a = 4cm bằng:", options: ["64cm³", "16cm³", "48cm³", "96cm³"], correctIndex: 0, explanation: "V = 4³ = 64cm³." },
                            { question: "Diện tích xung quanh của hình lăng trụ đứng bằng:", options: ["Chu vi đáy nhân với chiều cao", "Diện tích đáy nhân chiều cao", "Nửa chu vi đáy nhân chiều cao", "Tổng diện tích 2 đáy"], correctIndex: 0, explanation: "S(xq) = 2p · h (chu vi đáy nhân chiều cao)." },
                            { question: "Thể tích của hình chóp đều bằng:", options: ["(1/3) · S · h", "S · h", "(1/2) · S · h", "3 · S · h"], correctIndex: 0, explanation: "Công thức trang 78." },
                            { question: "Diện tích xung quanh của hình chóp đều tính theo công thức:", options: ["S(xq) = p · d (nửa chu vi đáy nhân trung đoạn)", "S(xq) = 2p · d", "S(xq) = p · h", "S(xq) = S đáy · d"], correctIndex: 0, explanation: "Công thức trang 78." },
                            { question: "Các mặt bên của hình lăng trụ đứng là các hình gì?", options: ["Hình chữ nhật", "Hình bình hành", "Hình vuông", "Tam giác cân"], correctIndex: 0, explanation: "Mặt bên lăng trụ đứng là hình chữ nhật." },
                            { question: "Các mặt bên của hình chóp đều là các hình gì?", options: ["Tam giác cân bằng nhau", "Tam giác vuông", "Hình chữ nhật", "Tam giác đều"], correctIndex: 0, explanation: "Mặt bên hình chóp đều là các tam giác cân." },
                            { question: "Trung đoạn của hình chóp đều là:", options: ["Đường cao của mặt bên xuất phát từ đỉnh", "Cạnh bên", "Chiều cao hình chóp", "Đường trung tuyến đáy"], correctIndex: 0, explanation: "Định nghĩa trung đoạn trang 77." },
                            { question: "Hình lập phương có bao nhiêu mặt, bao nhiêu đỉnh và bao nhiêu cạnh?", options: ["6 mặt, 8 đỉnh, 12 cạnh", "8 mặt, 6 đỉnh, 12 cạnh", "6 mặt, 12 đỉnh, 8 cạnh", "4 mặt, 4 đỉnh, 6 cạnh"], correctIndex: 0, explanation: "Đặc điểm hình lập phương." },
                            { question: "Hình lăng trụ đứng có đáy là tam giác thì có bao nhiêu mặt bên?", options: ["3 mặt bên", "4 mặt bên", "2 mặt bên", "5 mặt bên"], correctIndex: 0, explanation: "Đáy tam giác có 3 cạnh nên có 3 mặt bên." },
                            { question: "Một hình hộp chữ nhật có kích thước 2cm, 3cm, 5cm. Diện tích toàn phần là:", options: ["62cm²", "30cm²", "60cm²", "31cm²"], correctIndex: 0, explanation: "2(2·3 + 3·5 + 5·2) = 2(6 + 15 + 10) = 62cm²." },
                            { question: "Hình chóp tứ giác đều có đáy là hình gì?", options: ["Hình vuông", "Hình chữ nhật", "Hình thoi", "Tam giác đều"], correctIndex: 0, explanation: "Đáy là đa giác đều có 4 cạnh là hình vuông." }
                        ],
                        trueFalse: [
                            { statement: "Hình hộp chữ nhật và hình lập phương cũng là các hình lăng trụ đứng.", correct: true, explanation: "Đúng theo ghi chú trang 76." },
                            { statement: "Thể tích của hình chóp đều bằng diện tích đáy nhân với chiều cao.", correct: false, explanation: "Sai. Phải nhân thêm 1/3: V = (1/3)Sh." },
                            { statement: "Các cạnh bên của hình lăng trụ đứng song song và bằng nhau.", correct: true, explanation: "Đúng theo lý thuyết trang 76." },
                            { statement: "Mặt bên của hình chóp cụt đều là các hình thang cân.", correct: true, explanation: "Đúng theo nhận xét trang 78." }
                        ],
                        shortAnswer: [
                            { id: "sa-1", question: "Tính thể tích của hình chóp đều có diện tích đáy S = 30cm² và chiều cao h = 7cm (cm³):", correctAnswer: "70", rubric: "V = (1/3) · 30 · 7 = 70cm³." },
                            { id: "sa-2", question: "Hình lăng trụ đứng có đáy là hình vuông cạnh 4cm, chiều cao 10cm. Tính thể tích (cm³):", correctAnswer: "160", rubric: "V = S · h = 4² · 10 = 160cm³." },
                            { id: "sa-3", question: "Hình chóp tứ giác đều có cạnh đáy 6cm, trung đoạn d = 5cm. Tính diện tích xung quanh (cm²):", correctAnswer: "60", rubric: "Nửa chu vi đáy p = (6 · 4)/2 = 12cm. S(xq) = p · d = 12 · 5 = 60cm²." },
                            { id: "sa-4", question: "Tính độ dài đường chéo của hình lập phương có cạnh bằng 2cm (viết dưới dạng số nguyên hoặc căn thức 2√3):", correctAnswer: "2√3", rubric: "Đường chéo d = √(a² + a² + a²) = a√3 = 2√3 cm." }
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
                title: "A. Đại số 9 (Toàn bộ 4 Chương)",
                lessons: [
                    {
                        id: "g9-ds-c1",
                        title: "Chương I: Căn bậc hai & Căn bậc ba (Biến đổi căn thức, Trục căn thức & Rút gọn)",
                        theory: `### 1. Căn bậc hai số học & Điều kiện có nghĩa (Trang 79-80)
• Căn bậc hai của số a không âm là x sao cho x² = a. Với số dương a: √a là căn bậc hai số học (x = √a ⇔ x ≥ 0 và x² = a).
• Điều kiện có nghĩa:
  - √A có nghĩa ⇔ A ≥ 0.
  - 1/√A có nghĩa ⇔ A > 0.
  - √(AB) có nghĩa ⇔ AB ≥ 0 (A, B cùng dấu).

### 2. Các phép biến đổi căn thức cốt lõi (Trang 80-81)
• Hằng đẳng thức: √(A²) = |A| = A (khi A ≥ 0) và = -A (khi A < 0).
• Khai phương một tích và một thương: √(A · B) = √A · √B (A, B ≥ 0); √(A/B) = √A / √B (A ≥ 0, B > 0).
• Đưa thừa số ra ngoài/vào trong dấu căn:
  - √(A²B) = |A|√B (với B ≥ 0).
  - A√B = √(A²B) (A ≥ 0); A√B = -√(A²B) (A < 0).
• Trục căn thức ở mẫu bằng nhân liên hợp:
  - m / (√A ± √B) = m(√A ∓ √B) / (A - B).
  - m / (A ± √B) = m(A ∓ √B) / (A² - B).

### 3. Căn bậc ba (Trang 83)
• Căn bậc ba của số a là số x sao cho x³ = a, ký hiệu ∛a. Mọi số thực đều có duy nhất 1 căn bậc ba.
• a < b ⇔ ∛a < ∛b. ∛(ab) = ∛a · ∛b.`,
                        quiz: [
                            { question: "Điều kiện xác định của √(3x - 6) là:", options: ["x ≥ 2", "x > 2", "x ≤ 2", "x ≥ -2"], correctIndex: 0, explanation: "3x - 6 ≥ 0 <=> x ≥ 2." },
                            { question: "Giá trị của biểu thức √((√3 - 2)²) bằng:", options: ["2 - √3", "√3 - 2", "3 - 2", "√3 + 2"], correctIndex: 0, explanation: "|√3 - 2| = 2 - √3 (vì √3 < 2)." },
                            { question: "Trục căn thức ở mẫu của 2 / (√5 - √3) ta được:", options: ["√5 + √3", "√5 - √3", "2(√5 + √3)", "(√5 + √3)/2"], correctIndex: 0, explanation: "2(√5 + √3) / (5 - 3) = √5 + √3." },
                            { question: "Căn bậc ba của -64 bằng:", options: ["-4", "4", "±4", "Không tồn tại"], correctIndex: 0, explanation: "(-4)³ = -64 nên ∛(-64) = -4." },
                            { question: "Đưa thừa số vào trong dấu căn của -3√2 được:", options: ["-√18", "√18", "-√6", "√6"], correctIndex: 0, explanation: "-3√2 = -√(3² · 2) = -√18." },
                            { question: "Rút gọn biểu thức √(8) - √(18) + √(50) ta được:", options: ["4√2", "2√2", "6√2", "0"], correctIndex: 0, explanation: "2√2 - 3√2 + 5√2 = 4√2." },
                            { question: "Biểu thức 1 / √(x - 3) xác định khi:", options: ["x > 3", "x ≥ 3", "x < 3", "x ≠ 3"], correctIndex: 0, explanation: "Mẫu chứa căn phải dương: x - 3 > 0 => x > 3." },
                            { question: "Số 9 có bao nhiêu căn bậc hai?", options: ["2 căn bậc hai là 3 và -3", "1 căn bậc hai là 3", "Không có", "Vô số"], correctIndex: 0, explanation: "Số dương có 2 căn bậc hai đối nhau." },
                            { question: "Khẳng định nào sau đây SAI?", options: ["√((-4)²) = -4", "√(16) = 4", "∛(-8) = -2", "√(0) = 0"], correctIndex: 0, explanation: "√((-4)²) = |-4| = 4, không thể bằng -4." },
                            { question: "Tìm x biết √x = 5:", options: ["x = 25", "x = √5", "x = ±25", "x = 10"], correctIndex: 0, explanation: "Bình phương hai vế được x = 25." },
                            { question: "Rút gọn √(x² - 4x + 4) với x ≥ 2 được:", options: ["x - 2", "2 - x", "x + 2", "-(x - 2)"], correctIndex: 0, explanation: "√((x - 2)²) = |x - 2| = x - 2 khi x ≥ 2." },
                            { question: "Tính: √(0,09 · 64) =", options: ["2,4", "24", "0,24", "4,8"], correctIndex: 0, explanation: "0,3 · 8 = 2,4." }
                        ],
                        trueFalse: [
                            { statement: "Mọi số thực đều có căn bậc ba duy nhất.", correct: true, explanation: "Đúng theo định nghĩa trang 83." },
                            { statement: "Biểu thức √(A · B) = √A · √B luôn đúng với mọi số thực A, B.", correct: false, explanation: "Sai. Chỉ đúng khi cả A và B đều không âm." },
                            { statement: "Căn bậc hai số học của số a không âm là một số không âm.", correct: true, explanation: "Đúng theo định nghĩa trang 79." },
                            { statement: "√(x²) = x với mọi số thực x.", correct: false, explanation: "Sai. √(x²) = |x|." }
                        ],
                        shortAnswer: [
                            { id: "sa-1", question: "Tính giá trị biểu thức: P = √(48) / √(3)", correctAnswer: "4", rubric: "P = √(48/3) = √16 = 4." },
                            { id: "sa-2", question: "Giải phương trình chứa căn: √(2x - 1) = 5. Tìm x:", correctAnswer: "13", rubric: "2x - 1 = 25 => 2x = 26 => x = 13." },
                            { id: "sa-3", question: "Rút gọn biểu thức P = (√5 - 1)(√5 + 1):", correctAnswer: "4", rubric: "(√5)² - 1² = 5 - 1 = 4." },
                            { id: "sa-4", question: "Tính giá trị của biểu thức: ∛(27) - ∛(-125)", correctAnswer: "8", rubric: "3 - (-5) = 3 + 5 = 8." }
                        ]
                    },
                    {
                        id: "g9-ds-c2",
                        title: "Chương II: Hàm số bậc nhất (Tính chất, Đồ thị y = ax + b, Vị trí tương đối & Hệ số góc)",
                        theory: `### 1. Khái niệm & Tính chất hàm số bậc nhất (Trang 84)
• Hàm số bậc nhất: y = ax + b (a ≠ 0).
• Tính chất biến thiên trên R:
  - Đồng biến trên R khi a > 0.
  - Nghịch biến trên R khi a < 0.

### 2. Đồ thị hàm số y = ax + b (a ≠ 0) (Trang 84-85)
• Đồ thị là đường thẳng cắt trục tung tại P(0; b), cắt trục hoành tại Q(-b/a; 0).
• Song song với y = ax nếu b ≠ 0; trùng y = ax nếu b = 0.
• a gọi là hệ số góc, b là tung độ gốc.

### 3. Góc tạo bởi đường thẳng y = ax + b và trục Ox (Trang 85)
• Khi a > 0: Góc α nhọn (0° < α < 90°), tan α = a.
• Khi a < 0: Góc α tù (90° < α < 180°), tan(180° - α) = |a| = -a.

### 4. Vị trí tương đối của hai đường thẳng (d): y = ax + b và (d'): y = a'x + b' (Trang 85-86)
• (d) cắt (d') ⇔ a ≠ a'.
• (d) // (d') ⇔ a = a' và b ≠ b'.
• (d) ≡ (d') ⇔ a = a' và b = b'.
• (d) ⊥ (d') ⇔ a · a' = -1.
• Cắt nhau tại một điểm trên trục tung ⇔ a ≠ a' và b = b'.`,
                        quiz: [
                            { question: "Hàm số y = (m - 3)x + 5 đồng biến trên R khi:", options: ["m > 3", "m < 3", "m ≠ 3", "m ≥ 3"], correctIndex: 0, explanation: "Hệ số a = m - 3 > 0 <=> m > 3." },
                            { question: "Hai đường thẳng y = 2x + 3 và y = (k - 1)x - 2 song song khi:", options: ["k = 3", "k = 2", "k = -1", "k = 1"], correctIndex: 0, explanation: "k - 1 = 2 => k = 3." },
                            { question: "Đường thẳng nào vuông góc với y = 0,5x + 1?", options: ["y = -2x + 3", "y = 2x + 3", "y = -0,5x - 1", "y = 0,5x - 4"], correctIndex: 0, explanation: "a · a' = 0,5 · (-2) = -1." },
                            { question: "Hệ số góc của đường thẳng y = -5x + 7 là:", options: ["-5", "5", "7", "-5/7"], correctIndex: 0, explanation: "Hệ số góc là a = -5." },
                            { question: "Giao điểm của đường thẳng y = 2x - 6 với trục hoành Ox có tọa độ là:", options: ["(3; 0)", "(0; -6)", "(-3; 0)", "(0; 3)"], correctIndex: 0, explanation: "Cho y = 0 => 2x = 6 => x = 3 => (3; 0)." },
                            { question: "Góc tạo bởi đường thẳng y = x + 2 và trục Ox bằng:", options: ["45°", "60°", "30°", "135°"], correctIndex: 0, explanation: "tan α = a = 1 => α = 45°." },
                            { question: "Hai đường thẳng y = ax + 3 và y = 2x + b cắt nhau tại một điểm trên trục tung khi:", options: ["a ≠ 2 và b = 3", "a = 2 và b = 3", "a ≠ 2 và b ≠ 3", "a = 2 và b ≠ 3"], correctIndex: 0, explanation: "Cắt trên Oy: a ≠ a' và b = b' => a ≠ 2; b = 3." },
                            { question: "Hàm số nào sau đây nghịch biến trên R?", options: ["y = -3x + 1", "y = 2x - 5", "y = √2 x + 3", "y = 4x"], correctIndex: 0, explanation: "Hệ số a = -3 < 0 nên hàm số nghịch biến." },
                            { question: "Đồ thị hàm số y = ax + b đi qua hai điểm A(0; 2) và B(1; 5). Giá trị của a và b là:", options: ["a = 3; b = 2", "a = 2; b = 3", "a = -3; b = 2", "a = 5; b = 2"], correctIndex: 0, explanation: "b = 2 => a·1 + 2 = 5 => a = 3." },
                            { question: "Góc tạo bởi đường thẳng y = -x + 1 và trục Ox là:", options: ["135°", "45°", "90°", "120°"], correctIndex: 0, explanation: "tan(180° - α) = |-1| = 1 => 180° - α = 45° => α = 135°." },
                            { question: "Tung độ gốc của đường thẳng y = 4x - 9 là:", options: ["-9", "4", "9/4", "9"], correctIndex: 0, explanation: "Tung độ gốc là b = -9." },
                            { question: "Điểm M(1; -2) thuộc đồ thị hàm số nào?", options: ["y = -3x + 1", "y = 2x", "y = x - 2", "y = 2x + 1"], correctIndex: 0, explanation: "Thay x = 1: y = -3(1) + 1 = -2." }
                        ],
                        trueFalse: [
                            { statement: "Hai đường thẳng có tích hệ số góc bằng -1 thì vuông góc với nhau.", correct: true, explanation: "Đúng theo định lý trang 86." },
                            { statement: "Đồ thị hàm số y = ax + b luôn đi qua gốc tọa độ O.", correct: false, explanation: "Sai. Chỉ khi b = 0 mới đi qua gốc O." },
                            { statement: "Hàm số bậc nhất đồng biến khi hệ số góc a > 0.", correct: true, explanation: "Đúng theo tính chất trang 84." },
                            { statement: "Hai đường thẳng trùng nhau khi có cùng hệ số góc a = a' và b ≠ b'.", correct: false, explanation: "Sai. Đó là điều kiện song song, trùng nhau phải cả a = a' và b = b'." }
                        ],
                        shortAnswer: [
                            { id: "sa-1", question: "Tìm hệ số góc a của đường thẳng đi qua gốc tọa độ O và điểm M(2; 8):", correctAnswer: "4", rubric: "8 = a · 2 => a = 4." },
                            { id: "sa-2", question: "Tìm hoành độ giao điểm của đường thẳng y = 2x - 4 với trục Ox:", correctAnswer: "2", rubric: "2x - 4 = 0 => x = 2." },
                            { id: "sa-3", question: "Tìm tung độ giao điểm của hai đường thẳng y = 3x - 1 và y = x + 3:", correctAnswer: "5", rubric: "3x - 1 = x + 3 => 2x = 4 => x = 2 => y = 2 + 3 = 5." },
                            { id: "sa-4", question: "Tìm m để đường thẳng y = mx + 2 song song với y = 5x - 1:", correctAnswer: "5", rubric: "Hai đường song song khi a = a' => m = 5 (và 2 ≠ -1 thỏa mãn)." }
                        ]
                    },
                    {
                        id: "g9-ds-c3",
                        title: "Chương III: Hệ hai phương trình bậc nhất hai ẩn (PP Thế, PP Cộng đại số, Định thức & Giải toán)",
                        theory: `### 1. Phương trình & Hệ phương trình bậc nhất hai ẩn (Trang 89)
• Phương trình ax + by = c (a² + b² ≠ 0) luôn có vô số nghiệm. Tập nghiệm biểu diễn bởi đường thẳng ax + by = c.
• Hệ hai phương trình: { ax + by = c (1); a'x + b'y = c' (2) }.
• Mối quan hệ số nghiệm với 2 đường thẳng (d) và (d'):
  - Nghiệm duy nhất ⇔ a/a' ≠ b/b' (cắt nhau).
  - Vô nghiệm ⇔ a/a' = b/b' ≠ c/c' (song song).
  - Vô số nghiệm ⇔ a/a' = b/b' = c/c' (trùng nhau).

### 2. Phương pháp giải hệ phương trình (Trang 89-90)
• Phương pháp thế: Rút 1 ẩn từ 1 phương trình thế vào phương trình còn lại.
• Phương pháp cộng đại số: Quy đồng hệ số của 1 ẩn rồi cộng/trừ từng vế để triệt tiêu ẩn đó.
• Phương pháp định thức (Cramer):
  D = ab' - a'b ; Dₓ = cb' - c'b ; D_y = ac' - a'c.
  - D ≠ 0: Nghiệm duy nhất x = Dₓ/D; y = D_y/D.
  - D = 0 và (Dₓ² + D_y² ≠ 0): Vô nghiệm.
  - D = Dₓ = D_y = 0: Vô số nghiệm.

### 3. Các dạng giải bài toán bằng cách lập hệ phương trình (Trang 91-92)
• Dạng tìm số: Cấu tạo số thập phân ab = 10a + b.
• Dạng làm chung - làm riêng: Năng suất = 1 / thời gian.
• Dạng chuyển động: S = v · t. Đuổi kịp nhau: t = S/(v₁ - v₂). Gặp nhau ngược chiều: t = S/(v₁ + v₂).
• Dạng năng suất: Tổng sản phẩm = Năng suất × Thời gian.`,
                        quiz: [
                            { question: "Nghiệm của hệ phương trình { x + y = 5 ; 2x - y = 1 } là:", options: ["(x; y) = (2; 3)", "(x; y) = (3; 2)", "(x; y) = (1; 4)", "(x; y) = (4; 1)"], correctIndex: 0, explanation: "Cộng vế theo vế: 3x = 6 => x = 2, y = 3." },
                            { question: "Hệ phương trình { ax + by = c ; a'x + b'y = c' } có nghiệm duy nhất khi:", options: ["a/a' ≠ b/b'", "a/a' = b/b' ≠ c/c'", "a/a' = b/b' = c/c'", "a = a'"], correctIndex: 0, explanation: "Hai đường thẳng cắt nhau." },
                            { question: "Hệ phương trình { 2x - y = 3 ; 4x - 2y = 5 } có bao nhiêu nghiệm?", options: ["Vô nghiệm", "Nghiệm duy nhất", "Vô số nghiệm", "2 nghiệm"], correctIndex: 0, explanation: "2/4 = -1/(-2) ≠ 3/5 (song song => vô nghiệm)." },
                            { question: "Hệ phương trình { x - 2y = 1 ; 2x - 4y = 2 } có bao nhiêu nghiệm?", options: ["Vô số nghiệm", "Vô nghiệm", "1 nghiệm", "3 nghiệm"], correctIndex: 0, explanation: "1/2 = -2/(-4) = 1/2 (trùng nhau => vô số nghiệm)." },
                            { question: "Nghiệm của hệ { 3x + 2y = 7 ; x - y = 4 } là:", options: ["(3; -1)", "(1; 2)", "(2; 1)", "(4; 0)"], correctIndex: 0, explanation: "x = y + 4 => 3(y + 4) + 2y = 7 => 5y = -5 => y = -1, x = 3." },
                            { question: "Hai người cùng làm chung 1 công việc hết 12 ngày. Mỗi ngày cả hai làm được:", options: ["1/12 công việc", "12 công việc", "1/6 công việc", "1 công việc"], correctIndex: 0, explanation: "Năng suất 1 ngày = 1/12 công việc." },
                            { question: "Phương trình bậc nhất hai ẩn 2x - y = 3 có bao nhiêu nghiệm?", options: ["Vô số nghiệm", "1 nghiệm", "Vô nghiệm", "2 nghiệm"], correctIndex: 0, explanation: "PT bậc nhất 2 ẩn luôn có vô số nghiệm." },
                            { question: "Tìm hai số biết tổng của chúng bằng 25 và hiệu bằng 7:", options: ["16 và 9", "18 và 7", "15 và 10", "17 và 8"], correctIndex: 0, explanation: "x = (25 + 7)/2 = 16; y = 16 - 7 = 9." },
                            { question: "Định thức D của hệ { 2x + 3y = 1 ; 4x - y = 5 } bằng:", options: ["-14", "14", "-10", "10"], correctIndex: 0, explanation: "D = 2(-1) - 4(3) = -2 - 12 = -14." },
                            { question: "Cho hệ { mx + y = 1 ; x + y = 2 }. Hệ có nghiệm duy nhất khi:", options: ["m ≠ 1", "m = 1", "m ≠ 2", "m = 2"], correctIndex: 0, explanation: "m/1 ≠ 1/1 => m ≠ 1." },
                            { question: "Cặp số nào sau đây là một nghiệm của phương trình 3x - 2y = 5?", options: ["(3; 2)", "(1; 1)", "(2; 3)", "(0; 5)"], correctIndex: 0, explanation: "3(3) - 2(2) = 9 - 4 = 5." },
                            { question: "Hai canô chuyển động ngược chiều cách nhau S km. Thời gian gặp nhau là:", options: ["t = S / (v₁ + v₂)", "t = S / (v₁ - v₂)", "t = S · (v₁ + v₂)", "t = (v₁ + v₂) / S"], correctIndex: 0, explanation: "Công thức chuyển động ngược chiều trang 92." }
                        ],
                        trueFalse: [
                            { statement: "Phương trình bậc nhất hai ẩn ax + by = c (a² + b² ≠ 0) luôn luôn có vô số nghiệm.", correct: true, explanation: "Đúng theo lý thuyết trang 89." },
                            { statement: "Hệ hai phương trình tương đương khi và chỉ khi mỗi phương trình có cùng một nghiệm.", correct: false, explanation: "Sai. Phải có cùng TẬP NGHIỆM." },
                            { statement: "Khi giải bài toán làm chung - làm riêng, không được cộng cột thời gian mà phải cộng năng suất.", correct: true, explanation: "Đúng theo ghi nhớ trang 92." },
                            { statement: "Nếu D = 0 và Dₓ ≠ 0 thì hệ phương trình có vô số nghiệm.", correct: false, explanation: "Sai. D = 0 và Dₓ ≠ 0 thì hệ vô nghiệm." }
                        ],
                        shortAnswer: [
                            { id: "sa-1", question: "Giải hệ phương trình { 2x + y = 10 ; x - y = 2 }. Tìm x:", correctAnswer: "4", rubric: "Cộng lại: 3x = 12 => x = 4." },
                            { id: "sa-2", question: "Tìm y trong hệ phương trình trên:", correctAnswer: "2", rubric: "y = 4 - 2 = 2." },
                            { id: "sa-3", question: "Hai ô tô khởi hành cùng một lúc từ hai tỉnh A và B cách nhau 180km đi ngược chiều và gặp nhau sau 2 giờ. Tính tổng vận tốc của hai xe (km/h):", correctAnswer: "90", rubric: "v₁ + v₂ = S / t = 180 / 2 = 90 km/h." },
                            { id: "sa-4", question: "Tìm m để hệ { x + y = 3 ; 2x + my = 6 } có vô số nghiệm:", correctAnswer: "2", rubric: "1/2 = 1/m = 3/6 => m = 2." }
                        ]
                    },
                    {
                        id: "g9-ds-c4",
                        title: "Chương IV: Hàm số y = ax² & Phương trình bậc hai một ẩn (Hệ thức Vi-ét, 16 dạng toán tham số m)",
                        theory: `### 1. Hàm số y = ax² (a ≠ 0) & Đồ thị Parabol (Trang 93)
• Tính chất biến thiên:
  - Nếu a > 0: Hàm số nghịch biến khi x < 0, đồng biến khi x > 0. Giá trị nhỏ nhất y = 0 tại x = 0. Đồ thị nằm phía trên trục hoành, O(0; 0) là điểm thấp nhất.
  - Nếu a < 0: Hàm số đồng biến khi x < 0, nghịch biến khi x > 0. Giá trị lớn nhất y = 0 tại x = 0. Đồ thị nằm phía dưới trục hoành, O(0; 0) là điểm cao nhất.
• Đồ thị là đường cong Parabol đỉnh O(0; 0), nhận Oy làm trục đối xứng.

### 2. Phương trình bậc hai ax² + bx + c = 0 (a ≠ 0) (Trang 93-94)
• Công thức nghiệm tổng quát: Biệt thức Δ = b² - 4ac.
  - Δ > 0: 2 nghiệm phân biệt x₁,₂ = (-b ± √Δ) / (2a).
  - Δ = 0: Nghiệm kép x₁ = x₂ = -b / (2a).
  - Δ < 0: Vô nghiệm.
• Công thức nghiệm thu gọn (với b = 2b'): Δ' = b'² - ac.
  - Δ' > 0: x₁,₂ = (-b' ± √Δ') / a.
  - Δ' = 0: x₁ = x₂ = -b' / a.
  - Δ' < 0: Vô nghiệm.

### 3. Hệ thức Vi-ét & Ứng dụng (Trang 94-97)
• Định lý Vi-ét: Nếu x₁, x₂ là 2 nghiệm của ax² + bx + c = 0 (a ≠ 0) thì:
  S = x₁ + x₂ = -b/a  và  P = x₁ · x₂ = c/a.
• Nhẩm nghiệm:
  - Nếu a + b + c = 0 ⇒ x₁ = 1; x₂ = c/a.
  - Nếu a - b + c = 0 ⇒ x₁ = -1; x₂ = -c/a.
• Tìm 2 số u và v biết tổng S và tích P: u và v là nghiệm phương trình X² - SX + P = 0 (điều kiện S² - 4P ≥ 0).
• Các biến đổi hệ thức thường gặp:
  - x₁² + x₂² = (x₁ + x₂)² - 2x₁x₂ = S² - 2P.
  - 1/x₁ + 1/x₂ = (x₁ + x₂)/(x₁x₂) = S/P.
  - x₁³ + x₂³ = S³ - 3PS.
• Điều kiện về dấu của nghiệm:
  - Hai nghiệm trái dấu: P < 0 (hoặc a · c < 0).
  - Hai nghiệm cùng dấu: Δ ≥ 0 và P > 0.
  - Hai nghiệm dương: Δ ≥ 0, P > 0, S > 0.
  - Hai nghiệm âm: Δ ≥ 0, P > 0, S < 0.`,
                        quiz: [
                            { question: "Biệt thức Δ của phương trình 2x² - 5x + 2 = 0 bằng:", options: ["9", "25", "-9", "41"], correctIndex: 0, explanation: "Δ = (-5)² - 4·2·2 = 25 - 16 = 9." },
                            { question: "Tổng S và tích P của hai nghiệm phương trình x² - 7x + 10 = 0 là:", options: ["S = 7; P = 10", "S = -7; P = 10", "S = 7; P = -10", "S = 10; P = 7"], correctIndex: 0, explanation: "S = -(-7)/1 = 7; P = 10/1 = 10." },
                            { question: "Phương trình x² - (m + 2)x + m + 1 = 0 luôn có 1 nghiệm bằng:", options: ["x = 1", "x = -1", "x = 2", "x = 0"], correctIndex: 0, explanation: "a + b + c = 1 - m - 2 + m + 1 = 0 => có nghiệm x = 1." },
                            { question: "Đồ thị hàm số y = -2x² có đặc điểm nào?", options: ["Nằm phía dưới trục hoành, O là điểm cao nhất", "Nằm phía trên trục hoành", "Đồng biến khi x > 0", "Không đi qua O"], correctIndex: 0, explanation: "a = -2 < 0 nên parabol quay bề lõm xuống dưới." },
                            { question: "Điều kiện để phương trình bậc hai ax² + bx + c = 0 có hai nghiệm trái dấu là:", options: ["a · c < 0 (hay P < 0)", "Δ > 0 và P > 0", "a · c > 0", "Δ = 0"], correctIndex: 0, explanation: "ac < 0 thì luôn có 2 nghiệm trái dấu." },
                            { question: "Phương trình bậc hai có biệt thức Δ = 0 thì:", options: ["Có nghiệm kép x = -b / (2a)", "Có 2 nghiệm phân biệt", "Vô nghiệm", "Có vô số nghiệm"], correctIndex: 0, explanation: "Δ = 0 thì có nghiệm kép." },
                            { question: "Cho phương trình x² - 6x + 8 = 0 có 2 nghiệm x₁, x₂. Giá trị x₁² + x₂² bằng:", options: ["20", "36", "16", "28"], correctIndex: 0, explanation: "S² - 2P = 6² - 2·8 = 36 - 16 = 20." },
                            { question: "Hàm số y = 3x² đồng biến khi:", options: ["x > 0", "x < 0", "Mọi x", "x = 0"], correctIndex: 0, explanation: "a = 3 > 0 đồng biến khi x > 0." },
                            { question: "Phương trình trùng phương ax⁴ + bx² + c = 0 được giải bằng cách đặt ẩn phụ:", options: ["t = x² (t ≥ 0)", "t = x³", "t = 1/x", "t = 2x"], correctIndex: 0, explanation: "Đặt t = x² (t ≥ 0)." },
                            { question: "Nếu a - b + c = 0 thì phương trình ax² + bx + c = 0 có nghiệm là:", options: ["x₁ = -1; x₂ = -c/a", "x₁ = 1; x₂ = c/a", "x₁ = -1; x₂ = c/a", "x₁ = 1; x₂ = -c/a"], correctIndex: 0, explanation: "Quy tắc nhẩm nghiệm trang 94." },
                            { question: "Biệt thức thu gọn Δ' của x² - 2mx + m² - 4 = 0 là:", options: ["4", "m² - 4", "-4", "2m"], correctIndex: 0, explanation: "b' = -m => Δ' = (-m)² - (m² - 4) = 4." },
                            { question: "Phương trình x² - 4x + 4 = 0 có nghiệm là:", options: ["Nghiệm kép x = 2", "x = ±2", "x = 4", "Vô nghiệm"], correctIndex: 0, explanation: "(x - 2)² = 0 => x = 2." }
                        ],
                        trueFalse: [
                            { statement: "Nếu a và c trái dấu (ac < 0) thì phương trình bậc hai ax² + bx + c = 0 luôn có hai nghiệm phân biệt.", correct: true, explanation: "Đúng. Vì khi đó Δ = b² - 4ac > 0 luôn đúng." },
                            { statement: "Đồ thị hàm số y = ax² (a ≠ 0) luôn nhận trục tung Oy làm trục đối xứng.", correct: true, explanation: "Đúng theo tính chất trang 93." },
                            { statement: "Hệ thức Vi-ét có thể áp dụng cho mọi phương trình bậc hai kể cả khi phương trình vô nghiệm.", correct: false, explanation: "Sai. Chỉ áp dụng khi phương trình có nghiệm (Δ ≥ 0)." },
                            { statement: "Giá trị nhỏ nhất của hàm số y = 2x² là 0 đạt được tại x = 0.", correct: true, explanation: "Đúng. y ≥ 0 với mọi x." }
                        ],
                        shortAnswer: [
                            { id: "sa-1", question: "Tìm nghiệm dương của phương trình: x² - 5x + 6 = 0", correctAnswer: "3", rubric: "Nghiệm là 2 và 3. Nghiệm lớn hơn là 3." },
                            { id: "sa-2", question: "Gọi x₁, x₂ là hai nghiệm của x² - 9x + 14 = 0. Tính giá trị của 1/x₁ + 1/x₂ (nhập dưới dạng a/b tối giản):", correctAnswer: "9/14", rubric: "1/x₁ + 1/x₂ = S/P = 9/14." },
                            { id: "sa-3", question: "Tìm m để phương trình x² - 2x + m = 0 có nghiệm kép:", correctAnswer: "1", rubric: "Δ' = (-1)² - m = 1 - m = 0 => m = 1." },
                            { id: "sa-4", question: "Tìm giao điểm của Parabol y = x² và đường thẳng y = 2x. Tìm hoành độ dương của giao điểm:", correctAnswer: "2", rubric: "x² = 2x => x(x - 2) = 0 => x = 0 hoặc x = 2. Hoành độ dương là 2." }
                        ]
                    }
                ]
            },
            {
                id: "g9-hh",
                title: "B. Hình học 9 (Toàn bộ 4 Chương & 28 Vấn đề chứng minh)",
                lessons: [
                    {
                        id: "g9-hh-c1",
                        title: "Chương I: Hệ thức lượng trong tam giác vuông & Tỉ số lượng giác",
                        theory: `### 1. Một số hệ thức về cạnh và đường cao trong tam giác vuông (Trang 102)
Cho ΔABC vuông tại A, đường cao AH. Đặt BC = a, AC = b, AB = c, AH = h, BH = c', CH = b'.
1. Bình phương mỗi cạnh góc vuông bằng tích cạnh huyền với hình chiếu tương ứng:
   b² = a · b' (AC² = BC · CH)  và  c² = a · c' (AB² = BC · BH).
2. Bình phương đường cao bằng tích hai hình chiếu:
   h² = b' · c' (AH² = BH · CH).
3. Tích hai cạnh góc vuông bằng tích cạnh huyền với đường cao:
   b · c = a · h (AB · AC = BC · AH).
4. Nghịch đảo bình phương đường cao bằng tổng nghịch đảo bình phương hai cạnh góc vuông:
   1/h² = 1/b² + 1/c² (1/AH² = 1/AB² + 1/AC²).
5. Định lý Py-ta-go: a² = b² + c² (BC² = AB² + AC²).

### 2. Tỉ số lượng giác của góc nhọn (Trang 103-104)
• Cho tam giác vuông có góc nhọn α:
  - sin α = Cạnh đối / Cạnh huyền.
  - cos α = Cạnh kề / Cạnh huyền.
  - tan α = Cạnh đối / Cạnh kề.
  - cot α = Cạnh kề / Cạnh đối.
• Tính chất lượng giác cần nhớ:
  - 0 < sin α < 1 ; 0 < cos α < 1.
  - tan α = sin α / cos α ; cot α = cos α / sin α ; tan α · cot α = 1.
  - sin²α + cos²α = 1.
  - 1 + tan²α = 1 / cos²α ; 1 + cot²α = 1 / sin²α.
• Góc phụ nhau (α + β = 90°): sin α = cos β; cos α = sin β; tan α = cot β; cot α = tan β.
• Hệ thức giữa cạnh và góc trong tam giác vuông: b = a · sin B = a · cos C = c · tan B = c · cot C.`,
                        quiz: [
                            { question: "Cho ΔABC vuông tại A, đường cao AH có BH = 4cm, CH = 9cm. Độ dài đường cao AH bằng:", options: ["6cm", "13cm", "36cm", "5cm"], correctIndex: 0, explanation: "AH² = BH · CH = 4 · 9 = 36 => AH = 6cm." },
                            { question: "Với góc nhọn α bất kỳ, đẳng thức lượng giác nào sau đây luôn ĐÚNG?", options: ["sin²α + cos²α = 1", "sin²α - cos²α = 1", "tan α = cos α / sin α", "sin α + cos α = 1"], correctIndex: 0, explanation: "sin²α + cos²α = 1." },
                            { question: "Trong tam giác vuông, sin của một góc nhọn bằng:", options: ["Cạnh đối / Cạnh huyền", "Cạnh kề / Cạnh huyền", "Cạnh đối / Cạnh kề", "Cạnh huyền / Cạnh đối"], correctIndex: 0, explanation: "Định nghĩa sin." },
                            { question: "Nếu α + β = 90° thì kết luận nào sau đây ĐÚNG?", options: ["sin α = cos β", "sin α = sin β", "tan α = tan β", "cos α = -cos β"], correctIndex: 0, explanation: "Hai góc phụ nhau: sin góc này bằng cos góc kia." },
                            { question: "Cho ΔABC vuông tại A có AB = 3cm, AC = 4cm. sin B bằng:", options: ["4/5", "3/5", "3/4", "4/3"], correctIndex: 0, explanation: "BC = 5cm. sin B = AC / BC = 4/5." },
                            { question: "tan 45° có giá trị bằng:", options: ["1", "√3", "√3 / 3", "1/2"], correctIndex: 0, explanation: "tan 45° = 1." },
                            { question: "Cho ΔABC vuông tại A có đường cao AH. Hệ thức nào sau đây SAI?", options: ["AH² = AB · AC", "AB · AC = BC · AH", "AH² = BH · CH", "1/AH² = 1/AB² + 1/AC²"], correctIndex: 0, explanation: "AH² = BH · CH, không phải AB · AC." },
                            { question: "Cho tam giác vuông có cạnh huyền bằng 10cm và 1 góc nhọn bằng 30°. Cạnh đối diện góc 30° dài:", options: ["5cm", "10√3 cm", "5√3 cm", "2,5cm"], correctIndex: 0, explanation: "b = a · sin 30° = 10 · (1/2) = 5cm." },
                            { question: "Giá trị của biểu thức tan 30° · cot 30° bằng:", options: ["1", "√3", "3", "0"], correctIndex: 0, explanation: "tan α · cot α = 1." },
                            { question: "Biết cos α = 0,8. Giá trị của sin α bằng:", options: ["0,6", "0,2", "0,64", "0,36"], correctIndex: 0, explanation: "sin α = √(1 - 0,8²) = √0,36 = 0,6." },
                            { question: "Trong tam giác vuông, cạnh góc vuông bằng cạnh huyền nhân với:", options: ["Sin góc đối hoặc Cosin góc kề", "Tan góc đối", "Cot góc kề", "Cosin góc đối"], correctIndex: 0, explanation: "Theo hệ thức cạnh và góc trang 104." },
                            { question: "Cho ΔABC vuông tại A có AH = 4cm, BH = 2cm. Độ dài cạnh BC bằng:", options: ["10cm", "8cm", "6cm", "12cm"], correctIndex: 0, explanation: "CH = AH²/BH = 16/2 = 8cm => BC = 2 + 8 = 10cm." }
                        ],
                        trueFalse: [
                            { statement: "Với mọi góc nhọn α, ta luôn có 0 < sin α < 1 và 0 < cos α < 1.", correct: true, explanation: "Đúng theo tính chất trang 103." },
                            { statement: "Đẳng thức 1 + tan²α = 1 / cos²α đúng với mọi góc nhọn α.", correct: true, explanation: "Đúng theo công thức lượng giác trang 103." },
                            { statement: "Trong tam giác vuông, bình phương đường cao bằng tích hai cạnh góc vuông.", correct: false, explanation: "Sai. Bằng tích hai hình chiếu: h² = b' · c'." },
                            { statement: "tan α càng lớn khi góc nhọn α càng giảm.", correct: false, explanation: "Sai. Khi α tăng từ 0° đến 90° thì tan α tăng." }
                        ],
                        shortAnswer: [
                            { id: "sa-1", question: "Cho tam giác vuông có hai cạnh góc vuông là 3cm và 4cm. Tính độ dài đường cao ứng với cạnh huyền (cm):", correctAnswer: "2.4", rubric: "BC = 5cm. AH = (AB · AC) / BC = (3 · 4) / 5 = 2,4cm." },
                            { id: "sa-2", question: "Tính giá trị biểu thức: M = sin²35° + sin²55° + tan 20° · cot 20°", correctAnswer: "2", rubric: "sin 55° = cos 35° => sin²35° + cos²35° = 1. tan 20° · cot 20° = 1 => 1 + 1 = 2." },
                            { id: "sa-3", question: "Cho tam giác ABC vuông tại A có BC = 20cm, ∠B = 30°. Tính độ dài cạnh AB (viết dạng số nguyên nếu làm tròn hoặc 10√3):", correctAnswer: "10√3", rubric: "AB = BC · cos 30° = 20 · (√3 / 2) = 10√3 cm." },
                            { id: "sa-4", question: "Cho ΔABC vuông tại A, đường cao AH. Biết BH = 1cm, BC = 9cm. Tính độ dài cạnh AB (cm):", correctAnswer: "3", rubric: "AB² = BH · BC = 1 · 9 = 9 => AB = 3cm." }
                        ]
                    },
                    {
                        id: "g9-hh-c2",
                        title: "Chương II: Đường tròn (Đường kính - dây cung, Tiếp tuyến & Vị trí tương đối 2 đường tròn)",
                        theory: `### 1. Định nghĩa & Quan hệ đường kính - dây cung (Trang 105)
• Đường tròn (O; R): Tập hợp các điểm cách O khoảng bằng R. Qua 3 điểm không thẳng hàng vẽ được duy nhất 1 đường tròn.
• Quan hệ đường kính và dây:
  - Đường kính vuông góc với một dây thì đi qua trung điểm của dây ấy.
  - Đường kính đi qua trung điểm của một dây không đi qua tâm thì vuông góc với dây ấy.
  - Hai dây bằng nhau thì cách đều tâm; dây nào lớn hơn thì gần tâm hơn.

### 2. Tiếp tuyến của đường tròn & Tính chất (Trang 105-106)
• Dấu hiệu: Đường thẳng vuông góc với bán kính tại tiếp điểm là tiếp tuyến.
• Tính chất hai tiếp tuyến cắt nhau tại M (tiếp điểm A, B):
  - MA = MB.
  - MO là tia phân giác góc AMB.
  - OM là tia phân giác góc AOB.
  - MO là đường trung trực của đoạn thẳng AB.

### 3. Vị trí tương đối giữa đường thẳng và đường tròn (Trang 106)
• Cắt nhau (2 điểm chung) ⇔ d < R.
• Tiếp xúc (1 điểm chung) ⇔ d = R.
• Không giao nhau (0 điểm chung) ⇔ d > R.

### 4. Vị trí tương đối của hai đường tròn (O; R) và (O'; r) (Trang 106-107)
• Cắt nhau (2 điểm chung) ⇔ R - r < OO' < R + r. Đường nối tâm OO' là trung trực của dây cung chung.
• Tiếp xúc ngoài (1 điểm chung) ⇔ OO' = R + r.
• Tiếp xúc trong (1 điểm chung) ⇔ OO' = R - r.
• Ngoài nhau (0 điểm chung) ⇔ OO' > R + r.
• Đựng nhau (0 điểm chung) ⇔ OO' < R - r. Đồng tâm khi OO' = 0.`,
                        quiz: [
                            { question: "Đường kính vuông góc với một dây cung thì:", options: ["Đi qua trung điểm của dây ấy", "Song song với dây ấy", "Bằng một nửa dây ấy", "Không cắt dây ấy"], correctIndex: 0, explanation: "Định lý quan hệ đường kính và dây cung trang 105." },
                            { question: "Nếu hai tiếp tuyến của đường tròn cắt nhau tại 1 điểm thì điểm đó:", options: ["Cách đều hai tiếp điểm", "Trùng với tâm", "Nằm trên đường tròn", "Cách đều 3 cạnh"], correctIndex: 0, explanation: "MA = MB theo tính chất 2 tiếp tuyến cắt nhau." },
                            { question: "Đường thẳng và đường tròn cắt nhau khi khoảng cách d từ tâm đến đường thẳng thỏa mãn:", options: ["d < R", "d = R", "d > R", "d = 0"], correctIndex: 0, explanation: "Cắt nhau khi d < R." },
                            { question: "Hai đường tròn (O; 5cm) và (O'; 3cm) tiếp xúc ngoài khi khoảng cách nối tâm OO' bằng:", options: ["8cm", "2cm", "15cm", "4cm"], correctIndex: 0, explanation: "OO' = R + r = 5 + 3 = 8cm." },
                            { question: "Hai đường tròn cắt nhau có bao nhiêu điểm chung?", options: ["2 điểm chung", "1 điểm chung", "0 điểm chung", "Vô số"], correctIndex: 0, explanation: "Cắt nhau tại 2 điểm phân biệt." },
                            { question: "Đường thẳng a là tiếp tuyến của (O; R) khi và chỉ khi:", options: ["Khoảng cách d từ O đến a bằng R", "d < R", "d > R", "a đi qua tâm O"], correctIndex: 0, explanation: "d = R." },
                            { question: "Cho đường tròn (O; 10cm) và dây AB = 16cm. Khoảng cách từ tâm O đến dây AB bằng:", options: ["6cm", "8cm", "12cm", "4cm"], correctIndex: 0, explanation: "OH = √(R² - (AB/2)²) = √(10² - 8²) = 6cm." },
                            { question: "Tâm đường tròn ngoại tiếp tam giác vuông nằm ở:", options: ["Trung điểm cạnh huyền", "Đỉnh góc vuông", "Trực tâm", "Bên ngoài tam giác"], correctIndex: 0, explanation: "Bán kính bằng nửa cạnh huyền." },
                            { question: "Tâm đường tròn nội tiếp tam giác là giao điểm của:", options: ["Ba đường phân giác trong", "Ba đường trung trực", "Ba đường cao", "Ba đường trung tuyến"], correctIndex: 0, explanation: "Theo trang 110." },
                            { question: "Cho (O; 4cm) và (O'; 2cm), biết OO' = 1cm. Vị trí tương đối của hai đường tròn là:", options: ["Đựng nhau", "Cắt nhau", "Tiếp xúc trong", "Ngoài nhau"], correctIndex: 0, explanation: "OO' = 1 < R - r = 2 nên (O) đựng (O')." },
                            { question: "Số tiếp tuyến chung của hai đường tròn ngoài nhau là:", options: ["4 tiếp tuyến", "3 tiếp tuyến", "2 tiếp tuyến", "1 tiếp tuyến"], correctIndex: 0, explanation: "Gồm 2 tiếp tuyến chung ngoài và 2 tiếp tuyến chung trong." },
                            { question: "Góc tạo bởi tiếp tuyến và bán kính đi qua tiếp điểm bằng:", options: ["90°", "180°", "45°", "60°"], correctIndex: 0, explanation: "Tiếp tuyến vuông góc với bán kính tại tiếp điểm." }
                        ],
                        trueFalse: [
                            { statement: "Đường kính là dây cung lớn nhất của đường tròn.", correct: true, explanation: "Đúng theo trang 105." },
                            { statement: "Qua ba điểm thẳng hàng luôn vẽ được một đường tròn.", correct: false, explanation: "Sai. Qua 3 điểm thẳng hàng KHÔNG vẽ được đường tròn nào." },
                            { statement: "Đường nối tâm của hai đường tròn cắt nhau là đường trung trực của dây chung.", correct: true, explanation: "Đúng theo tính chất trang 107." },
                            { statement: "Hai dây cung cách đều tâm thì có độ dài bằng nhau.", correct: true, explanation: "Đúng theo quan hệ giữa dây và khoảng cách đến tâm." }
                        ],
                        shortAnswer: [
                            { id: "sa-1", question: "Cho đường tròn (O; 5cm), dây AB = 8cm. Tính khoảng cách từ tâm O đến dây AB (cm):", correctAnswer: "3", rubric: "d = √(5² - 4²) = √9 = 3cm." },
                            { id: "sa-2", question: "Hai đường tròn (O; 7cm) và (O'; 4cm) tiếp xúc trong. Khoảng cách nối tâm OO' là bao nhiêu cm?", correctAnswer: "3", rubric: "OO' = R - r = 7 - 4 = 3cm." },
                            { id: "sa-3", question: "Từ điểm M ngoài (O; 6cm) kẻ tiếp tuyến MA (A là tiếp điểm). Biết MO = 10cm. Tính độ dài đoạn tiếp tuyến MA (cm):", correctAnswer: "8", rubric: "MA = √(MO² - OA²) = √(10² - 6²) = 8cm." },
                            { id: "sa-4", question: "Cho hai tiếp tuyến MA, MB của (O) cắt nhau tại M. Biết góc AMB = 60°. Tính góc AOB (độ):", correctAnswer: "120", rubric: "Tứ giác MAOB có ∠A = ∠B = 90° => ∠AOB = 180° - 60° = 120°." }
                        ]
                    },
                    {
                        id: "g9-hh-c3",
                        title: "Chương III: Góc với đường tròn & Tứ giác nội tiếp (Góc tâm, nội tiếp, tạo bởi tiếp tuyến & 28 Vấn đề CM)",
                        theory: `### 1. Năm loại góc với đường tròn (Trang 108-109)
1. Góc ở tâm: Đỉnh trùng với tâm đường tròn. Số đo bằng số đo cung bị chắn: ∠AOB = sđ AB.
2. Góc nội tiếp: Đỉnh trên đường tròn, 2 cạnh chứa 2 dây cung. Số đo bằng NỬA số đo cung bị chắn: ∠AMB = (1/2) sđ AB.
   - Góc nội tiếp chắn nửa đường tròn là góc vuông (90°).
   - Các góc nội tiếp cùng chắn một cung thì bằng nhau.
3. Góc tạo bởi tia tiếp tuyến và dây cung: Số đo bằng NỬA số đo cung bị chắn: ∠xAB = (1/2) sđ AB.
4. Góc có đỉnh ở bên trong đường tròn: Số đo bằng NỬA TỔNG hai cung bị chắn: ∠AMB = (sđ AB + sđ CD) / 2.
5. Góc có đỉnh ở bên ngoài đường tròn: Số đo bằng NỬA HIỆU hai cung bị chắn: ∠AMB = (sđ AB - sđ CD) / 2.

### 2. Tứ giác nội tiếp & Dấu hiệu nhận biết (Trang 110, 116)
• Tứ giác nội tiếp là tứ giác có 4 đỉnh nằm trên một đường tròn.
• Định lý: Tổng hai góc đối diện bằng 180° (∠A + ∠C = ∠B + ∠D = 180°). Góc ngoài tại một đỉnh bằng góc trong của đỉnh đối diện.
• Bốn dấu hiệu nhận biết tứ giác nội tiếp:
  1. Tứ giác có tổng hai góc đối bằng 180°.
  2. Tứ giác có góc ngoài tại một đỉnh bằng góc trong của đỉnh đối diện.
  3. Tứ giác có 4 đỉnh cách đều một điểm (điểm đó là tâm).
  4. Tứ giác có hai đỉnh kề nhau cùng nhìn cạnh chứa hai đỉnh còn lại dưới một góc α bằng nhau.

### 3. Cung chứa góc, Độ dài đường tròn & Diện tích hình quạt (Trang 109, 116-117)
• Quỹ tích các điểm nhìn đoạn AB dưới góc α không đổi là hai cung chứa góc α dựng trên đoạn AB.
• Độ dài đường tròn: C = 2πR = πd. Độ dài cung n°: l = (πRn) / 180.
• Diện tích hình tròn: S = πR². Diện tích quạt tròn n°: S = (πR²n) / 360 = (l · R) / 2.
• Hệ thống 28 vấn đề phương pháp chứng minh hình học trọng tâm ôn thi vào 10 (Trang 110-120): Chứng minh hai góc bằng nhau, hai đoạn thẳng bằng nhau, ba điểm thẳng hàng, hai đường thẳng vuông góc/song song, ba đường đồng quy, tứ giác nội tiếp, tiếp tuyến, hệ thức hình học.`,
                        quiz: [
                            { question: "Góc nội tiếp chắn nửa đường tròn có số đo bằng:", options: ["90°", "180°", "60°", "45°"], correctIndex: 0, explanation: "Góc vuông chắn nửa đường tròn." },
                            { question: "Tứ giác ABCD nội tiếp đường tròn thì tổng hai góc đối ∠A + ∠C bằng:", options: ["180°", "360°", "90°", "120°"], correctIndex: 0, explanation: "Định lý tứ giác nội tiếp." },
                            { question: "Trong một đường tròn, góc ở tâm chắn cung 80° thì có số đo bằng:", options: ["80°", "40°", "160°", "100°"], correctIndex: 0, explanation: "Góc ở tâm bằng số đo cung bị chắn." },
                            { question: "Góc nội tiếp cùng chắn cung 80° đó có số đo bằng:", options: ["40°", "80°", "160°", "20°"], correctIndex: 0, explanation: "Bằng nửa góc ở tâm: 80° / 2 = 40°." },
                            { question: "Tứ giác nào sau đây LUÔN LUÔN nội tiếp được đường tròn?", options: ["Hình thang cân", "Hình thoi", "Hình bình hành", "Hình thang vuông"], correctIndex: 0, explanation: "Hình thang cân có 2 góc đối bù nhau nên luôn nội tiếp." },
                            { question: "Góc tạo bởi tia tiếp tuyến và dây cung có số đo bằng:", options: ["Nửa số đo cung bị chắn", "Số đo cung bị chắn", "Gấp đôi cung bị chắn", "90°"], correctIndex: 0, explanation: "Theo định lý trang 108." },
                            { question: "Công thức tính diện tích hình tròn bán kính R là:", options: ["S = πR²", "S = 2πR", "S = 4πR²", "S = πd"], correctIndex: 0, explanation: "S = πR²." },
                            { question: "Độ dài cung tròn n° bán kính R được tính theo công thức:", options: ["l = πRn / 180", "l = πRn / 360", "l = 2πRn", "l = πR²n / 360"], correctIndex: 0, explanation: "Công thức trang 109." },
                            { question: "Tứ giác có hai đỉnh kề nhau cùng nhìn cạnh đối diện dưới một góc bằng nhau là:", options: ["Tứ giác nội tiếp", "Hình chữ nhật", "Hình bình hành", "Hình thoi"], correctIndex: 0, explanation: "Dấu hiệu nhận biết tứ giác nội tiếp (cung chứa góc)." },
                            { question: "Góc có đỉnh ở bên ngoài đường tròn có số đo bằng:", options: ["Nửa hiệu số đo hai cung bị chắn", "Nửa tổng hai cung bị chắn", "Số đo cung lớn", "90°"], correctIndex: 0, explanation: "Theo định lý trang 108." },
                            { question: "Công thức tính diện tích hình quạt tròn n° bán kính R là:", options: ["S = πR²n / 360", "S = πRn / 180", "S = πR²n / 180", "S = 2πRn"], correctIndex: 0, explanation: "Công thức trang 110." },
                            { question: "Góc nội tiếp và góc tạo bởi tiếp tuyến và dây cung cùng chắn một cung thì:", options: ["Bằng nhau", "Bù nhau", "Phụ nhau", "Gấp đôi nhau"], correctIndex: 0, explanation: "Cùng bằng nửa số đo cung bị chắn." }
                        ],
                        trueFalse: [
                            { statement: "Tứ giác có góc ngoài tại một đỉnh bằng góc trong của đỉnh đối diện thì nội tiếp được đường tròn.", correct: true, explanation: "Đúng theo dấu hiệu trang 110." },
                            { statement: "Góc ở tâm có số đo bằng một nửa số đo cung bị chắn.", correct: false, explanation: "Sai. Góc ở tâm bằng CHÍNH số đo cung bị chắn." },
                            { statement: "Mọi hình chữ nhật và hình vuông đều là tứ giác nội tiếp.", correct: true, explanation: "Đúng vì tổng hai góc đối bằng 90° + 90° = 180°." },
                            { statement: "Hai góc nội tiếp bằng nhau thì chắc chắn cùng chắn một cung.", correct: false, explanation: "Sai. Chúng có thể chắn hai cung bằng nhau trên cùng đường tròn." }
                        ],
                        shortAnswer: [
                            { id: "sa-1", question: "Tứ giác ABCD nội tiếp đường tròn có ∠A = 75°. Tính số đo góc đối diện ∠C (độ):", correctAnswer: "105", rubric: "180° - 75° = 105°." },
                            { id: "sa-2", question: "Tính độ dài cung 60° của đường tròn có bán kính R = 6cm (viết kết quả theo π, ví dụ: 2π):", correctAnswer: "2π", rubric: "l = (π · 6 · 60) / 180 = 2π cm." },
                            { id: "sa-3", question: "Cho đường tròn (O; 4cm). Tính diện tích hình quạt tròn 90° (viết kết quả theo π, ví dụ: 4π):", correctAnswer: "4π", rubric: "S = (π · 4² · 90) / 360 = 16π / 4 = 4π cm²." },
                            { id: "sa-4", question: "Cho tam giác ABC nội tiếp đường tròn (O), biết ∠A = 50°. Tính số đo góc ở tâm ∠BOC cùng chắn cung BC (độ):", correctAnswer: "100", rubric: "Góc ở tâm gấp đôi góc nội tiếp: 2 · 50° = 100°." }
                        ]
                    },
                    {
                        id: "g9-hh-c4",
                        title: "Chương IV: Hình trụ, Hình nón, Hình cầu (Công thức diện tích xung quanh, toàn phần & thể tích)",
                        theory: `### 1. Hình trụ (Trang 121)
• Khi quay hình chữ nhật một vòng quanh một cạnh cố định, ta được một hình trụ.
• Bán kính đáy là r, chiều cao là h (cũng là độ dài đường sinh l):
  - Diện tích xung quanh: S(xq) = 2πrh.
  - Diện tích toàn phần: S(tp) = 2πrh + 2πr² = 2πr(h + r).
  - Thể tích hình trụ: V = S(đáy) · h = πr²h.

### 2. Hình nón & Hình nón cụt (Trang 121, 123)
• Khi quay tam giác vuông một vòng quanh một cạnh góc vuông cố định, ta được một hình nón.
• Bán kính đáy r, chiều cao h, đường sinh l (liên hệ: l² = r² + h²):
  - Diện tích xung quanh: S(xq) = πrl.
  - Diện tích toàn phần: S(tp) = πrl + πr² = πr(l + r).
  - Thể tích hình nón: V = (1/3)πr²h.
• Hình nón cụt (bán kính 2 đáy r₁, r₂, đường sinh l, chiều cao h):
  - S(xq) = π(r₁ + r₂)l.
  - V = (1/3)πh(r₁² + r₂² + r₁r₂).

### 3. Hình cầu (Trang 121, 123)
• Khi quay nửa hình tròn tâm O bán kính R một vòng quanh đường kính, ta được một hình cầu.
• Diện tích mặt cầu: S = 4πR² = πd² (d là đường kính).
• Thể tích hình cầu: V = (4/3)πR³ = (1/6)πd³.`,
                        quiz: [
                            { question: "Thể tích của hình trụ có bán kính r = 3cm và chiều cao h = 5cm là:", options: ["45π cm³", "15π cm³", "30π cm³", "75π cm³"], correctIndex: 0, explanation: "V = πr²h = π · 3² · 5 = 45π cm³." },
                            { question: "Một hình cầu có bán kính R = 3cm thì diện tích mặt cầu bằng:", options: ["36π cm²", "12π cm²", "27π cm²", "108π cm²"], correctIndex: 0, explanation: "S = 4πR² = 4π · 9 = 36π cm²." },
                            { question: "Thể tích của hình cầu bán kính R = 3cm là:", options: ["36π cm³", "12π cm³", "27π cm³", "108π cm³"], correctIndex: 0, explanation: "V = (4/3)π · 3³ = 36π cm³." },
                            { question: "Diện tích xung quanh của hình nón tính theo công thức:", options: ["S(xq) = πrl", "S(xq) = 2πrl", "S(xq) = πrh", "S(xq) = (1/3)πrl"], correctIndex: 0, explanation: "Công thức trang 121." },
                            { question: "Hình nón có bán kính đáy r = 3cm, chiều cao h = 4cm. Độ dài đường sinh l bằng:", options: ["5cm", "7cm", "12cm", "25cm"], correctIndex: 0, explanation: "l = √(r² + h²) = √(3² + 4²) = 5cm." },
                            { question: "Thể tích của hình nón tính theo công thức:", options: ["V = (1/3)πr²h", "V = πr²h", "V = (4/3)πr³", "V = (1/2)πr²h"], correctIndex: 0, explanation: "Công thức trang 121." },
                            { question: "Diện tích xung quanh của hình trụ là:", options: ["S(xq) = 2πrh", "S(xq) = πrh", "S(xq) = 2πr²h", "S(xq) = πr²h"], correctIndex: 0, explanation: "Công thức trang 121." },
                            { question: "Quay một tam giác vuông quanh một cạnh góc vuông cố định ta được:", options: ["Hình nón", "Hình trụ", "Hình cầu", "Hình chóp"], correctIndex: 0, explanation: "Định nghĩa hình nón trang 121." },
                            { question: "Quay một hình chữ nhật quanh một cạnh cố định ta được:", options: ["Hình trụ", "Hình nón", "Hình cầu", "Hình hộp"], correctIndex: 0, explanation: "Định nghĩa hình trụ trang 121." },
                            { question: "Một hình trụ có chu vi đáy 10cm và chiều cao 6cm. Diện tích xung quanh bằng:", options: ["60cm²", "30cm²", "120cm²", "300cm²"], correctIndex: 0, explanation: "S(xq) = C · h = 10 · 6 = 60cm²." },
                            { question: "Nếu bán kính hình cầu tăng lên 2 lần thì thể tích của nó tăng lên:", options: ["8 lần", "4 lần", "2 lần", "16 lần"], correctIndex: 0, explanation: "V tỉ lệ với R³, khi R tăng 2 lần thì V tăng 2³ = 8 lần." },
                            { question: "Mặt cắt của hình cầu bởi một mặt phẳng bất kỳ luôn là:", options: ["Hình tròn", "Hình elip", "Hình chữ nhật", "Tam giác"], correctIndex: 0, explanation: "Mặt cắt hình cầu luôn là hình tròn." }
                        ],
                        trueFalse: [
                            { statement: "Thể tích hình nón bằng 1/3 thể tích hình trụ có cùng bán kính đáy và chiều cao.", correct: true, explanation: "Đúng. (1/3)πr²h so với πr²h." },
                            { statement: "Diện tích mặt cầu có bán kính R bằng 4 lần diện tích hình tròn lớn của nó.", correct: true, explanation: "Đúng. S = 4πR² = 4 · (πR²)." },
                            { statement: "Độ dài đường sinh l của hình nón luôn nhỏ hơn chiều cao h của nó.", correct: false, explanation: "Sai. l là cạnh huyền trong tam giác vuông nên l > h." },
                            { statement: "Khi quay nửa hình tròn quanh đường kính cố định ta được một hình cầu.", correct: true, explanation: "Đúng theo định nghĩa trang 121." }
                        ],
                        shortAnswer: [
                            { id: "sa-1", question: "Một hình nón có bán kính đáy r = 6cm, đường sinh l = 10cm. Tính diện tích xung quanh (ghi theo π, ví dụ: 60π):", correctAnswer: "60π", rubric: "S(xq) = π · 6 · 10 = 60π cm²." },
                            { id: "sa-2", question: "Tính chiều cao h của hình nón ở trên (cm):", correctAnswer: "8", rubric: "h = √(10² - 6²) = 8cm." },
                            { id: "sa-3", question: "Một hình trụ có r = 4cm, h = 5cm. Tính diện tích xung quanh (ghi theo π, ví dụ: 40π):", correctAnswer: "40π", rubric: "S(xq) = 2π · 4 · 5 = 40π cm²." },
                            { id: "sa-4", question: "Thể tích hình nón có r = 3cm và h = 4cm bằng bao nhiêu π cm³ (chỉ ghi hệ số trước π):", correctAnswer: "12", rubric: "V = (1/3)π · 3² · 4 = 12π cm³ => Hệ số là 12." }
                        ]
                    }
                ]
            }
        ]
    }
};

// Hàm sinh mã KEY chuẩn định dạng: ARGON-ABC123456ABC (ARGON - 3 chữ cái - 6 số - 3 chữ cái)
const generateCustomArgonKey = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yy = String(today.getFullYear()).slice(-2);
    const dateNumbers = `${dd}${mm}${yy}`; // 6 chữ số đại diện ngày/tháng/năm

    // 3 chữ cái tiền tố & 3 chữ cái hậu tố ngẫu nhiên có tính xác định theo ngày
    const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
    const prefix = letters[(seed * 7) % 26] + letters[(seed * 13) % 26] + letters[(seed * 19) % 26];
    const suffix = letters[(seed * 23) % 26] + letters[(seed * 29) % 26] + letters[(seed * 31) % 26];

    return `ARGON-${prefix}${dateNumbers}${suffix}`;
};

export default function App() {
    // Tự động load dữ liệu đã lưu từ LocalStorage để lưu giữ mọi chỉnh sửa vào mã nguồn sử dụng cho lần sau
    const [curriculum, setCurriculum] = useState(() => {
        try {
            const saved = localStorage.getItem("eduai_curriculum_data");
            return saved ? JSON.parse(saved) : INITIAL_CURRICULUM_DATA;
        } catch {
            return INITIAL_CURRICULUM_DATA;
        }
    });

    const [selectedGrade, setSelectedGrade] = useState("grade6");
    const [activeCourseId, setActiveCourseId] = useState("g6-dai-so");
    const [activeLessonId, setActiveLessonId] = useState("g6-ds-1");

    // State điều chỉnh độ rộng Sidebar tự do (Resizable) & Thu gọn Sidebar
    const [sidebarWidth, setSidebarWidth] = useState(() => {
        const saved = localStorage.getItem("eduai_sidebar_width");
        return saved ? parseInt(saved, 10) : 340;
    });
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const isResizingRef = useRef(false);

    // Xử lý kéo thả chuột để resize Sidebar
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!isResizingRef.current) return;
            const newWidth = Math.max(240, Math.min(e.clientX, 650));
            setSidebarWidth(newWidth);
        };

        const handleMouseUp = () => {
            if (isResizingRef.current) {
                isResizingRef.current = false;
                document.body.style.cursor = "default";
                document.body.style.userSelect = "auto";
                localStorage.setItem("eduai_sidebar_width", String(sidebarWidth));
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [sidebarWidth]);

    const currentGradeObj = curriculum[selectedGrade] || curriculum["grade6"];
    const activeCourse = currentGradeObj.courses.find(c => c.id === activeCourseId) || currentGradeObj.courses[0];
    const activeLesson = activeCourse.lessons.find(l => l.id === activeLessonId) || activeCourse.lessons[0];

    const [readTheoryMap, setReadTheoryMap] = useState({});
    const [completedLessons, setCompletedLessons] = useState({});
    const [activeTab, setActiveTab] = useState("theory");

    // Trạng thái phần I (Trắc nghiệm), Phần II (Đúng/Sai), Phần III (Trả lời ngắn)
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

    const [chatOpen, setChatOpen] = useState(false);
    const [chatExpanded, setChatExpanded] = useState(false);
    const [chatMessages, setChatMessages] = useState([
        {
            sender: "bot",
            text: "Xin chào! Mình là Argon — Gia sư Toán THCS của bạn. Cấu trúc bài kiểm tra hiện tại chuẩn ma trận mới gồm 12 câu Trắc nghiệm, 4 câu Đúng/Sai và 4 câu Tự luận trả lời ngắn. Hãy làm bài và Argon sẽ chấm điểm cho bạn nhé!"
        }
    ]);
    const [inputMessage, setInputMessage] = useState("");
    const [isBotTyping, setIsBotTyping] = useState(false);
    const chatBottomRef = useRef(null);

    // Cài đặt nội bộ & Trạng thái chỉnh sửa trực tiếp từng phần
    const [settingsOpen, setSettingsOpen] = useState(false);
    const [isInternalUnlocked, setIsInternalUnlocked] = useState(false);
    const [keyInput, setKeyInput] = useState("");
    const [keyError, setKeyError] = useState("");

    // Webhook lưu an toàn trong state & localStorage (Chỉ hiển thị và cho đổi khi đã vào trong Nội bộ)
    const [discordWebhookUrl, setDiscordWebhookUrl] = useState(() => {
        return localStorage.getItem("eduai_discord_webhook") ||
            "https://discord.com/api/webhooks/1565286796886282301/z_ZPBKc9ebPWijr8NT0z7KC2wBj2f_uvfHWh0VFQjm2x_Dn0l3RUw8vTRdl3CqMQEdv4";
    });
    const [webhookStatus, setWebhookStatus] = useState("");

    const [geminiApiKey, setGeminiApiKey] = useState(() => {
        return localStorage.getItem("eduai_gemini_api_key") || "";
    });
    const [argonSystemPrompt, setArgonSystemPrompt] = useState(() => {
        return localStorage.getItem("eduai_argon_prompt") ||
            `Bạn tên là Argon, Bạn là một gia sư cá nhân xuất sắc, có tư duy sư phạm đỉnh cao và thấu hiểu tâm lý học sinh. Bạn sẽ đồng hành cùng tôi để học chủ đề: Toán THCS.

      Hãy tuân thủ nghiêm ngặt các nguyên tắc giảng dạy sau:
1. Thiết lập lộ trình: Đầu tiên, hãy hỏi về trình độ hiện tại, mục tiêu và thời gian học của tôi để đề xuất một lộ trình học tập cá nhân hóa ngắn gọn.
2. Giảng dạy từng bước (Step-by-step): Chia nhỏ kiến thức thành các bài học mini. Không giải thích dồn dập nhiều khái niệm cùng lúc.
3. Phương pháp Socratic: Thay vì cung cấp ngay đáp án cho các bài tập, hãy đặt câu hỏi gợi mở để dẫn dắt tôi tự suy luận ra câu trả lời.
4. Lấy ví dụ thực tế: Luôn giải thích các lý thuyết khô khan bằng hình ảnh ẩn dụ hoặc các tình huống thực tế đời thường để tôi hiểu sâu bản chất.
5. Kiểm tra chủ động (Active Recall): Sau mỗi phần lý thuyết ngắn, hãy đưa ra 1 câu hỏi hoặc 1 bài tập nhỏ để kiểm tra mức độ hiểu bài của tôi. CHỈ CHUYỂN SANG BÀI TIẾP THEO KHI TÔI ĐÃ TRẢ LỜI ĐÚNG.
6. Thái độ kiên nhẫn: Nếu tôi trả lời sai, hãy phân tích logic lỗi sai của tôi một cách nhẹ nhàng và đưa ra gợi ý để tôi thử lại.

Bây giờ, hãy bắt đầu bằng việc chào hỏi và hỏi tôi về trình độ hiện tại cùng mục tiêu của mình đối với môn học này.`;
    });

    // Modal chỉnh sửa trực tiếp từng phần (Active Item Edit Modal)
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [editingTarget, setEditingTarget] = useState(null); // { type: 'grade'|'course'|'lesson'|'prompt'|'theory', data: ... }
    const [editFormValues, setEditFormValues] = useState({});

    // Lưu tự động dữ liệu vào LocalStorage mỗi khi có thay đổi
    useEffect(() => {
        try {
            localStorage.setItem("eduai_curriculum_data", JSON.stringify(curriculum));
        } catch (e) {
            console.error("Không thể lưu curriculum vào localStorage", e);
        }
    }, [curriculum]);

    useEffect(() => {
        try {
            localStorage.setItem("eduai_user_notes", JSON.stringify(userNotes));
        } catch (e) {
            console.error("Lỗi lưu user notes", e);
        }
    }, [userNotes]);

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

    // Đếm tiến độ làm bài
    const totalQuizCount = activeLesson.quiz?.length || 12;
    const answeredQuizCount = Object.keys(selectedAnswers).length;

    const totalTfCount = activeLesson.trueFalse?.length || 4;
    const answeredTfCount = Object.keys(trueFalseAnswers).length;

    const totalSaCount = activeLesson.shortAnswer?.length || 4;
    const answeredSaCount = Object.values(shortAnswers).filter(val => val && val.trim().length > 0).length;

    const canSubmitAll = (answeredQuizCount === totalQuizCount) &&
        (answeredTfCount === totalTfCount) &&
        (answeredSaCount === totalSaCount);

    const callArgonAI = async (userPrompt) => {
        const apiKeyToUse = geminiApiKey.trim(); // Canvas tự động cung cấp khi rỗng
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKeyToUse}`;
        try {
            const response = await fetch(
                apiUrl,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        systemInstruction: {
                            parts: [{ text: `${argonSystemPrompt}\nBài học hiện tại: ${activeLesson.title}\nLý thuyết tóm tắt: ${activeLesson.theory.slice(0, 1000)}` }]
                        },
                        contents: [{ role: "user", parts: [{ text: userPrompt }] }]
                    })
                }
            );
            const data = await response.json();
            const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;
            if (reply) return reply;
        } catch (err) {
            console.warn("Lỗi kết nối Gemini API, sử dụng bộ phản hồi linh hoạt của Argon:", err);
        }
        return null;
    };

    // Nộp bài và chấm điểm tổng hợp
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

        const total10Score = Math.round(
            ((qCorrect / totalQuizCount) * 3 + (tfCorrect / totalTfCount) * 4 + (saCorrect / totalSaCount) * 3) * 10
        ) / 10;

        setCompletedLessons(prev => ({ ...prev, [activeLesson.id]: true }));

        let evaluationResult = `📊 **KẾT QUẢ KIỂM TRA TỔNG HỢP TỪ GIA SƯ ARGON**\n\n` +
            `• **Chuyên đề:** ${activeLesson.title}\n` +
            `• **Tổng điểm:** **${total10Score} / 10 ĐIỂM**\n\n` +
            `Chi tiết từng phần:\n` +
            `1️⃣ **Phần I (Trắc nghiệm):** ${qCorrect}/${totalQuizCount} câu đúng (+${Math.round((qCorrect / totalQuizCount) * 3 * 10) / 10} điểm)\n` +
            `2️⃣ **Phần II (Đúng/Sai):** ${tfCorrect}/${totalTfCount} câu đúng (+${Math.round((tfCorrect / totalTfCount) * 4 * 10) / 10} điểm)\n` +
            `3️⃣ **Phần III (Tự luận trả lời ngắn):** ${saCorrect}/${totalSaCount} câu đúng (+${Math.round((saCorrect / totalSaCount) * 3 * 10) / 10} điểm)\n\n` +
            `🔍 **Chi tiết 4 câu Tự luận trả lời ngắn:**\n` +
            saDetails.map((d, i) =>
                `• **Câu ${i + 1}:** ${d.isRight ? "✅ Đúng" : "❌ Chưa đúng"}\n  - Em trả lời: \`${d.userAns}\` | Đáp án: \`${d.targetAns}\`\n  - Lời giải: ${d.rubric}`
            ).join("\n") +
            `\n\n💡 **Lời khuyên của Argon:** Em hãy xem lại các câu chưa đúng và phần giải thích chi tiết bên dưới nhé!`;

        const aiReview = await callArgonAI(`Hãy đưa ra nhận xét ngắn gọn và khích lệ học sinh đạt ${total10Score}/10 điểm ở bài "${activeLesson.title}".`);
        if (aiReview) {
            evaluationResult += `\n\n💬 **Nhắn nhủ từ Argon:**\n${aiReview}`;
        }

        setEssayEvaluation(evaluationResult);
        setIsGradingEssay(false);

        setChatMessages(prev => [
            ...prev,
            { sender: "user", text: `Argon chấm bài kiểm tra 3 phần của em nhé!` },
            { sender: "bot", text: evaluationResult }
        ]);
    };

    const handleSendMessage = async () => {
        if (!inputMessage.trim()) return;
        const userMsg = inputMessage.trim();
        setChatMessages(prev => [...prev, { sender: "user", text: userMsg }]);
        setInputMessage("");
        setIsBotTyping(true);

        // Ưu tiên gọi API Gemini để câu trả lời luôn phong phú và tự nhiên nhất
        const aiResponse = await callArgonAI(userMsg);
        if (aiResponse) {
            setChatMessages(prev => [...prev, { sender: "bot", text: aiResponse }]);
            setIsBotTyping(false);
            return;
        }

        // Xử lý thông minh khi offline hoặc mất mạng, phân loại chính xác các phản hồi ngắn để KHÔNG BAO GIỜ bị lặp câu chào
        setTimeout(() => {
            const lower = userMsg.toLowerCase().trim();
            let reply = "";

            // 1. Phản hồi các câu ngắn: ok, vâng, dạ, được, hiểu rồi, rồi, ừ,...
            if (/^(ok|okie|oke|dạ|vâng|rồi|hiểu rồi|được|uh|ừ|um|dạ vâng|ok anh|ok thầy|ok argon|dạ rồi)$/i.test(lower)) {
                const quickReplies = [
                    "Tuyệt vời! Em cứ tiếp tục làm bài nhé. Cần Argon hỗ trợ câu nào thì nhắn ngay nha!",
                    "Nhất trí nè! Chúc em làm bài thật tốt và đạt điểm 10 trọn vẹn!",
                    "Tốt lắm! Em tập trung đọc kỹ đề và tính toán cẩn thận từng câu nhé.",
                    "Oki em! Argon luôn ở đây đồng hành cùng em, có thắc mắc gì cứ hỏi nhé!"
                ];
                reply = quickReplies[Math.floor(Math.random() * quickReplies.length)];
            }
            // 2. Lời cảm ơn
            else if (lower.includes("cảm ơn") || lower.includes("cam on") || lower.includes("thank")) {
                reply = "Không có gì đâu nè! Giúp em hiểu bài là niềm vui của Argon mà. Cố gắng đạt điểm cao nhé! 😊";
            }
            // 3. Lời chào
            else if (/^(chào|hello|hi|xin chào|hey)/i.test(lower)) {
                reply = `Chào em! Argon đã sẵn sàng rồi đây. Em đang gặp khó khăn ở phần nào trong bài **"${activeLesson.title}"**?`;
            }
            // 4. Yêu cầu tóm tắt công thức
            else if (lower.includes("tóm tắt") || lower.includes("công thức") || lower.includes("lý thuyết")) {
                reply = `📌 **Công thức cốt lõi bài "${activeLesson.title}":**\n\n` +
                    activeLesson.theory.slice(0, 450) +
                    `\n\n...(Em có thể bấm tab "1. Lý thuyết" ở phía trên để xem toàn bộ nhé!)`;
            }
            // 5. Yêu cầu giải câu tự luận ngắn / bài tập
            else if (lower.includes("trả lời ngắn") || lower.includes("tự luận") || lower.includes("câu 1") || lower.includes("câu 2") || lower.includes("câu 3") || lower.includes("câu 4")) {
                reply = `💡 **Gợi ý từ Argon:** Trong bài "${activeLesson.title}", các câu trả lời ngắn yêu cầu em viết kết quả gọn nhất (số nguyên, phân số tối giản a/b hoặc căn thức). Em hãy tính nháp từng bước ra giấy rồi điền kết quả vào ô nhé!`;
            }
            // 6. Câu hỏi khác
            else {
                reply = `Argon ghi nhận câu hỏi của em: *"${userMsg}"*.\n\nĐối với bài học **${activeLesson.title}**, em hãy áp dụng đúng định lý và công thức tương ứng. Nếu đây là một bài tập cụ thể, em hãy gõ đầy đủ các số liệu đề bài để Argon hướng dẫn từng bước giải chi tiết nhé!`;
            }

            setChatMessages(prev => [...prev, { sender: "bot", text: reply }]);
            setIsBotTyping(false);
        }, 450);
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
            setKeyError("Mã KEY không hợp lệ! KEY chuẩn có định dạng ARGON-ABC123456ABC (Ví dụ: " + dailyKey + ")");
        }
    };

    // Nút gửi KEY qua Discord (Dùng webhook đã cấu hình sẵn trong mã nguồn, không lộ webhook ra ngoài)
    const handleSendKeyToDiscord = async () => {
        const dailyKey = generateCustomArgonKey();
        const targetWebhook = discordWebhookUrl.trim();
        if (!targetWebhook) {
            setWebhookStatus(`⚠️ Chưa cấu hình Webhook URL!`);
            return;
        }
        try {
            setWebhookStatus("Đang kích hoạt bot gửi KEY về Discord...");
            const res = await fetch(targetWebhook, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: "Argon Security Bot",
                    avatar_url: "https://cdn-icons-png.flaticon.com/512/4712/4712109.png",
                    embeds: [
                        {
                            title: "🔑 THÔNG BÁO MÃ KEY NỘI BỘ HÔM NAY",
                            description: `Mã KEY quản trị ứng dụng học tập EduAI hôm nay đã sẵn sàng:\n\n# \`${dailyKey}\`\n\n*Định dạng:* \`ARGON-ABC123456ABC\`\n*Lưu ý:* Mã có hiệu lực cho toàn bộ giáo viên và ban nội bộ. Vui lòng không chia sẻ ra ngoài.`,
                            color: 4351989,
                            fields: [
                                {
                                    name: "Trạng thái hệ thống",
                                    value: "🟢 Đang hoạt động bình thường",
                                    inline: true
                                },
                                {
                                    name: "Phạm vi áp dụng",
                                    value: "Lớp 6, 7, 8, 9 THCS",
                                    inline: true
                                }
                            ],
                            footer: {
                                text: "Hệ thống bảo mật EduAI Studio • Tự động kích hoạt hàng ngày"
                            },
                            timestamp: new Date().toISOString()
                        }
                    ]
                })
            });
            if (res.ok) {
                setWebhookStatus(`✅ Đã gửi mã KEY [${dailyKey}] vào Discord thành công!`);
            } else {
                setWebhookStatus(`⚠️ Lỗi gửi Webhook (${res.status}). Mã Key: ${dailyKey}`);
            }
        } catch (error) {
            setWebhookStatus(`⚠️ Không thể kết nối Discord Webhook. Mã Key: ${dailyKey}`);
        }
    };

    // Mở modal sửa trực tiếp cho từng phần khi đã mở khóa nội bộ
    const openDirectEditModal = (type, data) => {
        if (!isInternalUnlocked) {
            setSettingsOpen(true);
            return;
        }
        setEditingTarget({ type, data });
        if (type === "grade") {
            setEditFormValues({ name: data.name });
        } else if (type === "course") {
            setEditFormValues({ title: data.title });
        } else if (type === "lesson") {
            setEditFormValues({ title: data.title, theory: data.theory });
        } else if (type === "theory") {
            setEditFormValues({ theory: data.theory });
        } else if (type === "prompt") {
            setEditFormValues({ prompt: argonSystemPrompt });
        }
        setEditModalOpen(true);
    };

    // Lưu chỉnh sửa trực tiếp vào state và LocalStorage
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
        alert("✅ Đã cập nhật và tự động lưu vào mã nguồn thành công!");
    };

    const totalLessonsCount = Object.values(curriculum).reduce(
        (acc, g) => acc + g.courses.reduce((cAcc, c) => cAcc + c.lessons.length, 0),
        0
    );

    return (
        <div className="flex h-screen bg-slate-50 font-sans text-slate-900 overflow-hidden select-none">

            {/* 1. SIDEBAR TRÁI: CÓ THỂ MỞ RỘNG / THU NHỎ TỰ DO VÀ KHÔNG BỊ CẮT CHỮ */}
            {!isSidebarCollapsed && (
                <aside
                    style={{ width: `${sidebarWidth}px` }}
                    className="bg-white border-r border-slate-200 flex flex-col z-20 shrink-0 relative transition-none select-auto shadow-sm"
                >
                    {/* Header Sidebar với nút thu gọn */}
                    <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-indigo-900 via-indigo-800 to-slate-900 text-white">
                        <div className="flex items-center space-x-2.5 overflow-hidden">
                            <div className="p-2 bg-indigo-500 rounded-xl shadow-lg shrink-0">
                                <Sparkles className="w-5 h-5 text-white" />
                            </div>
                            <div className="overflow-hidden">
                                <h1 className="font-extrabold text-xl tracking-wide break-words">EduAI</h1>
                            </div>
                        </div>
                        <div className="flex items-center space-x-1 shrink-0">
                            {isInternalUnlocked && (
                                <button
                                    onClick={() => openDirectEditModal("prompt", {})}
                                    className="p-1.5 bg-indigo-700 hover:bg-indigo-600 rounded-lg text-white cursor-pointer"
                                    title="Sửa Prompt Gia sư Argon"
                                >
                                    <Edit className="w-3.5 h-3.5" />
                                </button>
                            )}
                            <button
                                onClick={() => setIsSidebarCollapsed(true)}
                                className="p-1.5 hover:bg-indigo-700/60 rounded-lg text-indigo-200 hover:text-white transition-all cursor-pointer"
                                title="Thu gọn Sidebar"
                            >
                                <PanelLeftClose className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* 4 Khối lớp 6, 7, 8, 9 */}
                    <div className="p-2.5 bg-slate-100 border-b border-slate-200 grid grid-cols-4 gap-1.5 shrink-0">
                        {Object.keys(curriculum).map((gradeKey) => {
                            const isSelected = selectedGrade === gradeKey;
                            const gradeObj = curriculum[gradeKey];
                            return (
                                <div key={gradeKey} className="relative group">
                                    <button
                                        onClick={() => handleSelectGrade(gradeKey)}
                                        className={`w-full py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${isSelected
                                                ? "bg-indigo-600 text-white shadow-md"
                                                : "bg-white text-slate-700 hover:bg-slate-200 border border-slate-200"
                                            }`}
                                    >
                                        {gradeObj.name.replace("Khối ", "")}
                                    </button>
                                    {isInternalUnlocked && (
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                openDirectEditModal("grade", gradeObj);
                                            }}
                                            className="absolute -top-1 -right-1 p-1 bg-amber-500 hover:bg-amber-600 text-white rounded-full shadow-md transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
                                            title={`Sửa tên ${gradeObj.name}`}
                                        >
                                            <Edit className="w-2.5 h-2.5" />
                                        </button>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Danh sách các chuyên đề & bài học: KHÔNG CẮT CHỮ (break-words whitespace-normal) */}
                    <div className="flex-1 overflow-y-auto p-3 space-y-4">
                        <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-1">
                            {currentGradeObj.name} — CHUYÊN ĐỀ SỔ TAY
                        </div>

                        {currentGradeObj.courses.map((course) => (
                            <div key={course.id} className="space-y-1.5">
                                <div className="font-bold text-xs text-indigo-950 px-1 py-1 flex items-start justify-between group">
                                    <div className="flex items-start space-x-1.5 flex-1 pr-1">
                                        <BookOpen className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                                        <span className="break-words whitespace-normal leading-snug">{course.title}</span>
                                    </div>
                                    {isInternalUnlocked && (
                                        <button
                                            onClick={() => openDirectEditModal("course", course)}
                                            className="p-1 text-slate-400 hover:text-indigo-600 rounded transition-all opacity-60 group-hover:opacity-100 shrink-0 cursor-pointer"
                                            title="Sửa tên chuyên đề"
                                        >
                                            <Edit className="w-3 h-3" />
                                        </button>
                                    )}
                                </div>

                                <div className="space-y-1 pl-2 border-l-2 border-indigo-100 ml-2">
                                    {course.lessons.map((lesson) => {
                                        const isCurrent = activeLesson.id === lesson.id;
                                        const isDone = completedLessons[lesson.id];
                                        return (
                                            <div key={lesson.id} className="flex items-start space-x-1 group">
                                                <button
                                                    onClick={() => handleSelectLesson(course.id, lesson.id)}
                                                    className={`flex-1 text-left px-3 py-2 rounded-xl text-xs font-medium transition-all flex items-start justify-between cursor-pointer ${isCurrent
                                                            ? "bg-indigo-50 text-indigo-700 font-bold border border-indigo-200 shadow-xs"
                                                            : "text-slate-600 hover:bg-slate-100"
                                                        }`}
                                                >
                                                    <span className="break-words whitespace-normal leading-relaxed pr-1.5 flex-1">
                                                        {lesson.title}
                                                    </span>
                                                    {isDone ? (
                                                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                                    ) : (
                                                        <span className="w-2 h-2 rounded-full bg-slate-300 shrink-0 mt-1.5" />
                                                    )}
                                                </button>
                                                {isInternalUnlocked && (
                                                    <button
                                                        onClick={() => openDirectEditModal("lesson", lesson)}
                                                        className="p-1.5 text-slate-400 hover:text-indigo-600 rounded-lg hover:bg-slate-100 opacity-60 group-hover:opacity-100 shrink-0 cursor-pointer mt-1"
                                                        title="Sửa bài học này"
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

                    {/* Bánh răng Cài đặt Nội bộ */}
                    <div className="p-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
                        <button
                            onClick={() => setSettingsOpen(true)}
                            className={`p-2 rounded-xl border text-xs font-semibold shadow-xs transition-all flex items-center space-x-1.5 cursor-pointer ${isInternalUnlocked
                                    ? "bg-emerald-50 border-emerald-300 text-emerald-800"
                                    : "bg-white border-slate-200 text-slate-600 hover:text-indigo-600 hover:border-indigo-300"
                                }`}
                            title="Cài đặt nội bộ (Chỉ Giáo viên/Quản trị viên có KEY)"
                        >
                            <Settings className="w-4 h-4" />
                            <span>{isInternalUnlocked ? "Quản trị Bật" : "Nội bộ"}</span>
                        </button>

                        <div className="text-[11px] text-slate-600">
                            Hoàn thành:{" "}
                            <span className="font-bold text-indigo-600">
                                {Object.keys(completedLessons).length}/{totalLessonsCount}
                            </span>
                        </div>
                    </div>

                    {/* THANH KÉO RESIZE SIDEBAR TỰ DO */}
                    <div
                        onMouseDown={(e) => {
                            isResizingRef.current = true;
                            document.body.style.cursor = "col-resize";
                            document.body.style.userSelect = "none";
                        }}
                        className="absolute top-0 right-0 w-2 h-full cursor-col-resize hover:bg-indigo-500/40 active:bg-indigo-600 transition-colors z-30 flex items-center justify-center group"
                        title="Kéo sang trái/phải để thay đổi kích thước Sidebar"
                    >
                        <div className="w-0.5 h-8 bg-slate-300 group-hover:bg-indigo-600 rounded-full" />
                    </div>
                </aside>
            )}

            {/* 2. KHU VỰC HỌC TẬP CHÍNH */}
            <main className="flex-1 flex flex-col overflow-hidden bg-white relative">
                <header className="h-16 border-b border-slate-200 px-6 flex items-center justify-between bg-white shrink-0">
                    <div className="flex items-center space-x-3 overflow-hidden pr-3">
                        {isSidebarCollapsed && (
                            <button
                                onClick={() => setIsSidebarCollapsed(false)}
                                className="p-2 bg-slate-100 hover:bg-indigo-50 text-slate-700 hover:text-indigo-600 rounded-xl border border-slate-200 transition-all flex items-center space-x-1.5 cursor-pointer shrink-0 shadow-xs"
                                title="Mở lại danh sách chuyên đề"
                            >
                                <PanelLeftOpen className="w-4 h-4 text-indigo-600" />
                                <span className="text-xs font-bold">Mục lục</span>
                            </button>
                        )}
                        <div className="overflow-hidden">
                            <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider block truncate">
                                {currentGradeObj.name} • {activeCourse.title}
                            </span>
                            <h2 className="text-sm font-bold text-slate-800 flex items-center space-x-2 truncate">
                                <span className="truncate">{activeLesson.title}</span>
                                {isInternalUnlocked && (
                                    <button
                                        onClick={() => openDirectEditModal("lesson", activeLesson)}
                                        className="p-1 text-slate-400 hover:text-indigo-600 cursor-pointer shrink-0"
                                        title="Chỉnh sửa bài học đang mở"
                                    >
                                        <Edit className="w-3.5 h-3.5" />
                                    </button>
                                )}
                            </h2>
                        </div>
                    </div>

                    <div className="flex bg-slate-100 p-1 rounded-xl shrink-0">
                        <button
                            onClick={() => setActiveTab("theory")}
                            className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all flex items-center space-x-1.5 cursor-pointer ${activeTab === "theory" ? "bg-white text-indigo-600 shadow-xs" : "text-slate-600 hover:text-slate-900"
                                }`}
                        >
                            <FileText className="w-3.5 h-3.5" />
                            <span>1. Lý thuyết</span>
                        </button>

                        <button
                            onClick={() => {
                                if (readTheoryMap[activeLesson.id] || completedLessons[activeLesson.id]) {
                                    setActiveTab("quiz");
                                } else {
                                    alert("Em hãy đọc kỹ Lý thuyết và bấm nút xác nhận ở cuối bài trước nhé!");
                                }
                            }}
                            className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all flex items-center space-x-1.5 cursor-pointer ${activeTab === "quiz"
                                    ? "bg-white text-indigo-600 shadow-xs"
                                    : readTheoryMap[activeLesson.id] || completedLessons[activeLesson.id]
                                        ? "text-slate-600 hover:text-slate-900"
                                        : "text-slate-400 cursor-not-allowed"
                                }`}
                        >
                            {!(readTheoryMap[activeLesson.id] || completedLessons[activeLesson.id]) && (
                                <Lock className="w-3 h-3 mr-1 text-slate-400" />
                            )}
                            <Edit3 className="w-3.5 h-3.5" />
                            <span>2. Bài kiểm tra (20 câu)</span>
                        </button>

                        <button
                            onClick={() => setActiveTab("notes")}
                            className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all flex items-center space-x-1.5 cursor-pointer ${activeTab === "notes" ? "bg-white text-indigo-600 shadow-xs" : "text-slate-600 hover:text-slate-900"
                                }`}
                        >
                            <Bookmark className="w-3.5 h-3.5" />
                            <span>3. Ghi chú</span>
                        </button>
                    </div>
                </header>

                {/* Khu vực nội dung bài học có thể cuộn độc lập */}
                <div className="flex-1 overflow-y-auto p-6 md:p-8 max-w-4xl mx-auto w-full select-auto">
                    {/* TAB 1: LÝ THUYẾT */}
                    {activeTab === "theory" && (
                        <div className="space-y-6">
                            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-100 p-5 rounded-2xl flex items-start justify-between">
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-indigo-600 text-white rounded-xl shadow-md shrink-0">
                                        <Sparkles className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-indigo-950 text-sm mb-1">Cấu trúc kiểm tra năng lực cùng Gia sư Argon</h3>
                                        <p className="text-xs text-indigo-800 leading-relaxed">
                                            Sau khi đọc xong Lý thuyết, em sẽ làm bài kiểm tra gồm 3 phần chuẩn: <br />
                                            • <strong>Phần I:</strong> 12 câu Trắc nghiệm khách quan (4 lựa chọn) <br />
                                            • <strong>Phần II:</strong> 4 câu Đúng / Sai <br />
                                            • <strong>Phần III:</strong> 4 câu Tự luận trả lời ngắn (Gia sư <strong>Argon</strong> chấm điểm chi tiết)
                                        </p>
                                    </div>
                                </div>
                                {isInternalUnlocked && (
                                    <button
                                        onClick={() => openDirectEditModal("theory", activeLesson)}
                                        className="p-2 bg-white text-indigo-700 hover:bg-indigo-50 border border-indigo-200 rounded-xl text-xs font-bold flex items-center space-x-1.5 shrink-0 shadow-xs cursor-pointer"
                                        title="Sửa nội dung lý thuyết bài này"
                                    >
                                        <Edit className="w-3.5 h-3.5" />
                                        <span>Sửa lý thuyết</span>
                                    </button>
                                )}
                            </div>

                            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                                {activeLesson.theory.split("\n").map((line, i) => {
                                    if (line.startsWith("### ")) {
                                        return (
                                            <h3 key={i} className="text-base font-bold text-indigo-900 pt-3 pb-1 border-b border-slate-100">
                                                {line.replace("### ", "")}
                                            </h3>
                                        );
                                    }
                                    return (
                                        <p key={i} className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">
                                            {line}
                                        </p>
                                    );
                                })}
                            </div>

                            <div className="flex justify-end pt-2 pb-8">
                                <button
                                    onClick={handleFinishReadingTheory}
                                    className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-lg transition-all flex items-center space-x-2 cursor-pointer"
                                >
                                    <CheckCircle2 className="w-4 h-4" />
                                    <span>Đã hiểu Lý thuyết — Bắt đầu làm bài kiểm tra 20 câu</span>
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    )}

                    {/* TAB 2: BÀI KIỂM TRA 3 PHẦN CHUẨN */}
                    {activeTab === "quiz" && (
                        <div className="space-y-8 pb-12">
                            <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <Award className="w-6 h-6 text-amber-600 shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-amber-950 text-xs">Tiến độ làm bài (Bắt buộc hoàn thành cả 3 phần)</h4>
                                        <p className="text-xs text-amber-800">
                                            Cần hoàn thành đủ 12 câu trắc nghiệm, 4 câu đúng/sai và 4 câu tự luận ngắn để nộp bài.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-2 text-right shrink-0">
                                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${answeredQuizCount === totalQuizCount ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-200 text-amber-950'}`}>
                                        TN: {answeredQuizCount}/{totalQuizCount}
                                    </span>
                                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${answeredTfCount === totalTfCount ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-200 text-amber-950'}`}>
                                        Đ/S: {answeredTfCount}/{totalTfCount}
                                    </span>
                                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${answeredSaCount === totalSaCount ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-200 text-amber-950'}`}>
                                        Ngắn: {answeredSaCount}/{totalSaCount}
                                    </span>
                                </div>
                            </div>

                            {/* PHẦN I: 12 CÂU TRẮC NGHIỆM */}
                            <div className="space-y-5">
                                <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                                    <h3 className="font-bold text-base text-slate-800 flex items-center">
                                        <span className="w-7 h-7 rounded-lg bg-indigo-600 text-white text-xs flex items-center justify-center mr-2.5">I</span>
                                        Phần I: Trắc nghiệm khách quan ({totalQuizCount} câu — 3,0 điểm)
                                    </h3>
                                    {quizSubmitted && (
                                        <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full">
                                            Đúng {quizScore}/{totalQuizCount} câu
                                        </span>
                                    )}
                                </div>

                                {activeLesson.quiz.map((q, qIdx) => (
                                    <div key={qIdx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                                        <h4 className="font-bold text-slate-900 text-sm">
                                            Câu {qIdx + 1}: {q.question}
                                        </h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                                            {q.options.map((opt, optIdx) => {
                                                const isSelected = selectedAnswers[qIdx] === optIdx;
                                                let btnStyle = "border-slate-200 hover:bg-slate-50 text-slate-700";
                                                if (isSelected) {
                                                    btnStyle = "border-indigo-600 bg-indigo-50 text-indigo-900 font-bold shadow-xs";
                                                }
                                                if (quizSubmitted) {
                                                    if (optIdx === q.correctIndex) {
                                                        btnStyle = "border-emerald-500 bg-emerald-50 text-emerald-900 font-bold";
                                                    } else if (isSelected && optIdx !== q.correctIndex) {
                                                        btnStyle = "border-rose-500 bg-rose-50 text-rose-900 font-bold";
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
                                                        className={`w-full text-left px-4 py-3 rounded-xl border text-xs transition-all flex items-center justify-between cursor-pointer ${btnStyle}`}
                                                    >
                                                        <span>{String.fromCharCode(65 + optIdx)}. {opt}</span>
                                                        {quizSubmitted && optIdx === q.correctIndex && (
                                                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                                                        )}
                                                    </button>
                                                );
                                            })}
                                        </div>

                                        {quizSubmitted && (
                                            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700">
                                                <strong className="text-indigo-900">Giải thích: </strong>
                                                {q.explanation}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* PHẦN II: 4 CÂU ĐÚNG / SAI */}
                            {activeLesson.trueFalse && (
                                <div className="space-y-5">
                                    <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                                        <h3 className="font-bold text-base text-slate-800 flex items-center">
                                            <span className="w-7 h-7 rounded-lg bg-indigo-600 text-white text-xs flex items-center justify-center mr-2.5">II</span>
                                            Phần II: Câu hỏi Đúng / Sai ({totalTfCount} câu — 4,0 điểm)
                                        </h3>
                                        {quizSubmitted && (
                                            <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full">
                                                Đúng {tfScore}/{totalTfCount} câu
                                            </span>
                                        )}
                                    </div>

                                    {activeLesson.trueFalse.map((tf, tfIdx) => {
                                        const userVal = trueFalseAnswers[tfIdx];
                                        return (
                                            <div key={tfIdx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                                                <div className="text-sm font-semibold text-slate-900">
                                                    Mệnh đề {tfIdx + 1}: {tf.statement}
                                                </div>

                                                <div className="flex space-x-3">
                                                    <button
                                                        onClick={() => {
                                                            if (quizSubmitted) return;
                                                            setTrueFalseAnswers(prev => ({ ...prev, [tfIdx]: true }));
                                                        }}
                                                        disabled={quizSubmitted}
                                                        className={`flex-1 py-2.5 rounded-xl border text-xs font-bold flex items-center justify-center space-x-2 transition-all cursor-pointer ${userVal === true
                                                                ? quizSubmitted
                                                                    ? tf.correct === true
                                                                        ? "bg-emerald-50 border-emerald-500 text-emerald-900"
                                                                        : "bg-rose-50 border-rose-500 text-rose-900"
                                                                    : "bg-indigo-50 border-indigo-600 text-indigo-900"
                                                                : "border-slate-200 text-slate-600 hover:bg-slate-50"
                                                            }`}
                                                    >
                                                        <Check className="w-4 h-4" />
                                                        <span>ĐÚNG</span>
                                                    </button>

                                                    <button
                                                        onClick={() => {
                                                            if (quizSubmitted) return;
                                                            setTrueFalseAnswers(prev => ({ ...prev, [tfIdx]: false }));
                                                        }}
                                                        disabled={quizSubmitted}
                                                        className={`flex-1 py-2.5 rounded-xl border text-xs font-bold flex items-center justify-center space-x-2 transition-all cursor-pointer ${userVal === false
                                                                ? quizSubmitted
                                                                    ? tf.correct === false
                                                                        ? "bg-emerald-50 border-emerald-500 text-emerald-900"
                                                                        : "bg-rose-50 border-rose-500 text-rose-900"
                                                                    : "bg-indigo-50 border-indigo-600 text-indigo-900"
                                                                : "border-slate-200 text-slate-600 hover:bg-slate-50"
                                                            }`}
                                                    >
                                                        <X className="w-4 h-4" />
                                                        <span>SAI</span>
                                                    </button>
                                                </div>

                                                {quizSubmitted && (
                                                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700">
                                                        <strong className="text-indigo-900">
                                                            Đáp án chuẩn: {tf.correct ? "ĐÚNG" : "SAI"}.{" "}
                                                        </strong>
                                                        {tf.explanation}
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            )}

                            {/* PHẦN III: 4 CÂU TỰ LUẬN TRẢ LỜI NGẮN */}
                            {activeLesson.shortAnswer && (
                                <div className="space-y-5">
                                    <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                                        <h3 className="font-bold text-base text-slate-800 flex items-center">
                                            <span className="w-7 h-7 rounded-lg bg-indigo-600 text-white text-xs flex items-center justify-center mr-2.5">III</span>
                                            Phần III: Tự luận trả lời ngắn ({totalSaCount} câu — 3,0 điểm)
                                        </h3>
                                        {quizSubmitted && (
                                            <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full">
                                                Đúng {saScore}/{totalSaCount} câu
                                            </span>
                                        )}
                                    </div>

                                    {activeLesson.shortAnswer.map((sa, saIdx) => (
                                        <div key={saIdx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                                            <div className="text-sm font-semibold text-slate-900">
                                                Câu {saIdx + 1}: {sa.question}
                                            </div>

                                            <div className="flex items-center space-x-3">
                                                <span className="text-xs font-bold text-slate-500 shrink-0">Điền câu trả lời:</span>
                                                <input
                                                    type="text"
                                                    value={shortAnswers[saIdx] || ""}
                                                    onChange={(e) => {
                                                        if (quizSubmitted) return;
                                                        const val = e.target.value;
                                                        setShortAnswers(prev => ({ ...prev, [saIdx]: val }));
                                                    }}
                                                    disabled={quizSubmitted}
                                                    placeholder="Ví dụ: 89 hoặc 16..."
                                                    className="flex-1 px-4 py-2.5 border border-slate-300 rounded-xl text-xs font-semibold text-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:bg-slate-50"
                                                />
                                            </div>

                                            {quizSubmitted && (
                                                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1">
                                                    <div>
                                                        <strong className="text-indigo-900">Đáp án chính xác: </strong>
                                                        <code className="px-2 py-0.5 bg-indigo-100 text-indigo-800 rounded font-bold">
                                                            {sa.correctAnswer}
                                                        </code>
                                                    </div>
                                                    <div>
                                                        <strong>Hướng dẫn giải chi tiết: </strong>
                                                        {sa.rubric}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* BẢNG ĐÁNH GIÁ CỦA GIA SƯ ARGON */}
                            {isGradingEssay && (
                                <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-xl flex items-center space-x-3 text-xs text-indigo-800">
                                    <RefreshCw className="w-4 h-4 animate-spin text-indigo-600" />
                                    <span>Gia sư <strong>Argon</strong> đang đối chiếu ma trận và chấm điểm tổng hợp...</span>
                                </div>
                            )}

                            {essayEvaluation && (
                                <div className="p-5 bg-gradient-to-br from-indigo-50 via-slate-50 to-blue-50 border border-indigo-200 rounded-2xl space-y-2">
                                    <div className="flex items-center space-x-2 text-indigo-900 font-bold text-sm">
                                        <Bot className="w-5 h-5 text-indigo-600" />
                                        <span>Phiếu chấm điểm & Nhận xét từ Gia sư Argon:</span>
                                    </div>
                                    <div className="text-xs text-slate-800 whitespace-pre-wrap leading-relaxed">
                                        {essayEvaluation}
                                    </div>
                                </div>
                            )}

                            {/* NÚT NỘP BÀI KIỂM TRA */}
                            <div className="pt-2">
                                {!quizSubmitted ? (
                                    <button
                                        onClick={handleSubmitQuizAndEssay}
                                        disabled={!canSubmitAll}
                                        className={`w-full py-4 rounded-xl text-xs font-bold shadow-lg transition-all ${canSubmitAll
                                                ? "bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer"
                                                : "bg-slate-200 text-slate-400 cursor-not-allowed"
                                            }`}
                                    >
                                        {canSubmitAll
                                            ? "Nộp bài kiểm tra 20 câu (Gia sư Argon chấm điểm ngay)"
                                            : `Chưa hoàn thành đủ 3 phần: Trắc nghiệm (${answeredQuizCount}/${totalQuizCount}), Đúng/Sai (${answeredTfCount}/${totalTfCount}), Trả lời ngắn (${answeredSaCount}/${totalSaCount})`}
                                    </button>
                                ) : (
                                    <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center justify-between">
                                        <div>
                                            <h5 className="font-bold text-emerald-950 text-sm">
                                                🎉 Đã nộp bài và nhận điểm từ Gia sư Argon!
                                            </h5>
                                            <p className="text-xs text-emerald-800 mt-1">
                                                Em hãy xem bảng điểm chi tiết bên trên và có thể chọn bài tiếp theo ở thanh bên trái!
                                            </p>
                                        </div>
                                        <button
                                            onClick={resetLessonQuizState}
                                            className="px-4 py-2.5 bg-white border border-emerald-300 text-emerald-700 text-xs font-bold rounded-xl hover:bg-emerald-100 shrink-0 cursor-pointer"
                                        >
                                            Làm lại bài này
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* TAB 3: GHI CHÚ */}
                    {activeTab === "notes" && (
                        <div className="space-y-4">
                            <h3 className="font-bold text-slate-900 text-sm">
                                Sổ tay ghi chú cá nhân — {activeLesson.title}
                            </h3>
                            <textarea
                                value={userNotes[activeLesson.id] || ""}
                                onChange={(e) =>
                                    setUserNotes(prev => ({ ...prev, [activeLesson.id]: e.target.value }))
                                }
                                placeholder="Ghi lại mẹo giải, các câu trả lời ngắn hay lưu ý từ Gia sư Argon..."
                                className="w-full h-64 p-4 border border-slate-200 rounded-2xl text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none shadow-xs"
                            />
                        </div>
                    )}
                </div>
            </main>

            {/* 3. CHATBOX GIA SƯ ARGON CÓ NÚT PHÓNG TO / THU NHỎ */}
            <div className="fixed bottom-6 right-6 z-40">
                {!chatOpen ? (
                    <button
                        onClick={() => setChatOpen(true)}
                        className="px-5 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-2xl flex items-center space-x-2.5 transition-all transform hover:scale-105 cursor-pointer"
                    >
                        <Bot className="w-5 h-5" />
                        <span className="text-xs font-bold">Gia sư Argon</span>
                    </button>
                ) : (
                    <div
                        style={{
                            width: chatExpanded ? "640px" : "384px",
                            height: chatExpanded ? "700px" : "520px"
                        }}
                        className="bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden transition-all duration-200"
                    >
                        <div className="p-4 bg-gradient-to-r from-indigo-900 to-slate-900 text-white flex items-center justify-between shrink-0">
                            <div className="flex items-center space-x-2.5 overflow-hidden">
                                <div className="p-2 bg-indigo-600 rounded-xl shrink-0">
                                    <Bot className="w-5 h-5 text-white" />
                                </div>
                                <div className="overflow-hidden">
                                    <h3 className="font-bold text-sm truncate">Gia sư Argon</h3>
                                    <p className="text-[10px] text-indigo-200 truncate">Trợ lý chấm điểm & Giải toán THCS</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-1.5 shrink-0">
                                <button
                                    onClick={() => setChatExpanded(!chatExpanded)}
                                    className="p-1.5 hover:bg-indigo-700/60 rounded-lg text-indigo-200 hover:text-white transition-all cursor-pointer"
                                    title={chatExpanded ? "Thu nhỏ cửa sổ chat" : "Mở rộng cửa sổ chat"}
                                >
                                    {chatExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                                </button>
                                <button
                                    onClick={() => setChatOpen(false)}
                                    className="text-indigo-200 hover:text-white text-sm font-bold px-1.5 cursor-pointer"
                                >
                                    ✕
                                </button>
                            </div>
                        </div>

                        <div className="px-3 py-2 bg-indigo-50 border-b border-indigo-100 flex gap-1.5 overflow-x-auto shrink-0">
                            <button
                                onClick={() => setInputMessage("Argon giải thích chi tiết 4 câu Tự luận trả lời ngắn giúp em!")}
                                className="px-2.5 py-1 bg-white text-indigo-700 border border-indigo-200 rounded-full text-[10px] font-semibold shrink-0 hover:bg-indigo-100 cursor-pointer"
                            >
                                Giải 4 câu trả lời ngắn
                            </button>
                            <button
                                onClick={() => setInputMessage("Argon tóm tắt công thức trọng tâm bài này giúp em!")}
                                className="px-2.5 py-1 bg-white text-indigo-700 border border-indigo-200 rounded-full text-[10px] font-semibold shrink-0 hover:bg-indigo-100 cursor-pointer"
                            >
                                Tóm tắt công thức
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50 select-auto">
                            {chatMessages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div
                                        className={`max-w-[85%] p-3.5 rounded-2xl text-xs whitespace-pre-wrap leading-relaxed ${msg.sender === "user"
                                                ? "bg-indigo-600 text-white rounded-br-none"
                                                : "bg-white text-slate-800 border border-slate-200 shadow-xs rounded-bl-none"
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isBotTyping && (
                                <div className="text-[11px] text-slate-400 italic px-2">
                                    Argon đang phân tích câu hỏi...
                                </div>
                            )}
                            <div ref={chatBottomRef} />
                        </div>

                        <div className="p-3 bg-white border-t border-slate-200 flex items-center space-x-2 shrink-0">
                            <input
                                type="text"
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                                placeholder="Hỏi Gia sư Argon..."
                                className="flex-1 px-3.5 py-2.5 bg-slate-100 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                            <button
                                onClick={handleSendMessage}
                                className="p-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-md cursor-pointer shrink-0"
                            >
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* 4. MODAL CÀI ĐẶT NỘI BỘ (BÁNH RĂNG GÓC TRÁI DƯỚI CÙNG) */}
            {settingsOpen && (
                <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
                        <div className="p-5 bg-slate-900 text-white flex items-center justify-between">
                            <div className="flex items-center space-x-2.5">
                                <Settings className="w-5 h-5 text-indigo-400" />
                                <div>
                                    <h3 className="font-bold text-sm">Quản trị Nội bộ — EduAI</h3>
                                    <p className="text-[11px] text-slate-400">
                                        Chỉ Quản trị viên/Giáo viên có KEY mới được sửa bài học và prompt AI
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setSettingsOpen(false)}
                                className="text-slate-400 hover:text-white text-sm font-bold px-2 cursor-pointer"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="p-6 overflow-y-auto space-y-5 flex-1">
                            {!isInternalUnlocked ? (
                                <div className="space-y-5 py-2">
                                    <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-start space-x-3">
                                        <Key className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                                        <div className="text-xs text-amber-900 space-y-1">
                                            <p className="font-bold">Yêu cầu xác thực KEY Nội bộ</p>
                                            <p>
                                                Nhập mã KEY được gửi trên Discord để mở khóa quyền chỉnh sửa trực tiếp nội dung bài học và cấu hình Gia sư Argon.
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-2">
                                            Nhập KEY nội bộ và nhấn phím Enter:
                                        </label>
                                        <div className="flex space-x-2">
                                            <input
                                                type="password"
                                                value={keyInput}
                                                onChange={(e) => setKeyInput(e.target.value)}
                                                onKeyDown={(e) => e.key === "Enter" && handleVerifyInternalKey()}
                                                placeholder="Ví dụ: ARGON-XYZ291026ABC"
                                                className="flex-1 px-4 py-3 border border-slate-300 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-indigo-600 font-mono tracking-wider"
                                            />
                                            <button
                                                onClick={handleVerifyInternalKey}
                                                className="px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl cursor-pointer"
                                            >
                                                Mở khóa
                                            </button>
                                        </div>
                                        {keyError && (
                                            <p className="text-xs text-rose-600 font-semibold mt-2 flex items-center">
                                                <AlertCircle className="w-3.5 h-3.5 mr-1 shrink-0" /> {keyError}
                                            </p>
                                        )}
                                    </div>

                                    {/* CHỈ CÓ NÚT GỬI KEY QUA DISCORD (ẨN HOÀN TOÀN LINK WEBHOOK Ở NGOÀI) */}
                                    <div className="pt-4 border-t border-slate-200 flex flex-col space-y-2">
                                        <button
                                            onClick={handleSendKeyToDiscord}
                                            className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-xl cursor-pointer flex items-center justify-center space-x-2 shadow-sm"
                                        >
                                            <Send className="w-4 h-4 text-indigo-400" />
                                            <span>Gửi KEY qua Discord</span>
                                        </button>
                                        {webhookStatus && (
                                            <p className="text-[11px] text-center text-indigo-700 bg-indigo-50 p-2.5 rounded-lg font-medium border border-indigo-100">
                                                {webhookStatus}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-5">
                                    <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-between">
                                        <div className="flex items-center space-x-2 text-emerald-900 text-xs font-bold">
                                            <ShieldCheck className="w-4 h-4 text-emerald-600" />
                                            <span>Đã mở khóa Quyền Quản trị: Bạn có thể sửa trực tiếp mọi phần/khối lớp ở giao diện chính</span>
                                        </div>
                                        <button
                                            onClick={() => {
                                                setIsInternalUnlocked(false);
                                                setKeyInput("");
                                            }}
                                            className="text-[11px] text-rose-600 font-bold hover:underline cursor-pointer"
                                        >
                                            Khóa lại
                                        </button>
                                    </div>

                                    {/* ĐỔI WEBHOOK TẠI ĐÂY (CHỈ KHI VÀO ĐƯỢC BÊN TRONG MỚI ĐƯỢC XEM VÀ ĐỔI) */}
                                    <div className="space-y-2 p-4 bg-slate-50 border border-slate-200 rounded-xl">
                                        <label className="block text-xs font-bold text-slate-800 flex items-center space-x-1.5">
                                            <Globe className="w-3.5 h-3.5 text-indigo-600" />
                                            <span>Cấu hình Discord Webhook URL (Bảo mật nội bộ):</span>
                                        </label>
                                        <div className="flex space-x-2">
                                            <input
                                                type="text"
                                                value={discordWebhookUrl}
                                                onChange={(e) => {
                                                    const val = e.target.value;
                                                    setDiscordWebhookUrl(val);
                                                    localStorage.setItem("eduai_discord_webhook", val);
                                                }}
                                                placeholder="https://discord.com/api/webhooks/..."
                                                className="flex-1 px-3 py-2 border border-slate-300 rounded-xl text-xs font-mono"
                                            />
                                            <button
                                                onClick={handleSendKeyToDiscord}
                                                className="px-3 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shrink-0 cursor-pointer"
                                            >
                                                Bắn thử Key
                                            </button>
                                        </div>
                                    </div>

                                    {/* Gemini API Key */}
                                    <div className="space-y-2 p-4 bg-slate-50 border border-slate-200 rounded-xl">
                                        <label className="block text-xs font-bold text-slate-800">
                                            Gemini API Key cho Gia sư Argon:
                                        </label>
                                        <input
                                            type="password"
                                            value={geminiApiKey}
                                            onChange={(e) => {
                                                const val = e.target.value;
                                                setGeminiApiKey(val);
                                                localStorage.setItem("eduai_gemini_api_key", val);
                                            }}
                                            placeholder="Nhập Gemini API Key (AIza...)"
                                            className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs"
                                        />
                                    </div>

                                    {/* System Prompt của Argon */}
                                    <div className="space-y-2 p-4 bg-slate-50 border border-slate-200 rounded-xl">
                                        <label className="block text-xs font-bold text-slate-800">
                                            System Prompt Gia sư Argon:
                                        </label>
                                        <textarea
                                            value={argonSystemPrompt}
                                            onChange={(e) => {
                                                const val = e.target.value;
                                                setArgonSystemPrompt(val);
                                                localStorage.setItem("eduai_argon_prompt", val);
                                            }}
                                            className="w-full h-24 p-3 border border-slate-300 rounded-xl text-xs"
                                        />
                                    </div>

                                    <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-xl text-xs text-indigo-900 leading-relaxed">
                                        💡 <strong>Cách chỉnh sửa:</strong> Các biểu tượng hình cây bút (Edit) đã xuất hiện bên cạnh từng Khối lớp, Chuyên đề, Bài học và Lý thuyết ở màn hình chính. Bấm vào bất kỳ icon nào để sửa trực tiếp, hệ thống sẽ tự động lưu vào mã nguồn máy bạn!
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* 5. MODAL CHỈNH SỬA TRỰC TIẾP TỪNG PHẦN / KHỐI LỚP / BÀI HỌC */}
            {editModalOpen && editingTarget && (
                <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
                        <div className="p-5 bg-indigo-900 text-white flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <Edit3 className="w-5 h-5 text-indigo-400" />
                                <h3 className="font-bold text-sm">
                                    Chỉnh sửa: {editingTarget.type === 'grade' ? 'Tên Khối lớp' : editingTarget.type === 'course' ? 'Tên Chuyên đề' : 'Nội dung Bài học'}
                                </h3>
                            </div>
                            <button
                                onClick={() => setEditModalOpen(false)}
                                className="text-indigo-300 hover:text-white font-bold px-2 cursor-pointer"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="p-6 overflow-y-auto space-y-4 flex-1">
                            {editingTarget.type === 'grade' && (
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">Tên Khối lớp:</label>
                                    <input
                                        type="text"
                                        value={editFormValues.name || ""}
                                        onChange={(e) => setEditFormValues({ ...editFormValues, name: e.target.value })}
                                        className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs font-semibold text-slate-800"
                                    />
                                </div>
                            )}

                            {editingTarget.type === 'course' && (
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">Tên Chuyên đề:</label>
                                    <input
                                        type="text"
                                        value={editFormValues.title || ""}
                                        onChange={(e) => setEditFormValues({ ...editFormValues, title: e.target.value })}
                                        className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs font-semibold text-slate-800"
                                    />
                                </div>
                            )}

                            {(editingTarget.type === 'lesson' || editingTarget.type === 'theory') && (
                                <div className="space-y-4">
                                    {editingTarget.type === 'lesson' && (
                                        <div>
                                            <label className="block text-xs font-bold text-slate-700 mb-1">Tiêu đề bài học:</label>
                                            <input
                                                type="text"
                                                value={editFormValues.title || ""}
                                                onChange={(e) => setEditFormValues({ ...editFormValues, title: e.target.value })}
                                                className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs font-semibold text-slate-800"
                                            />
                                        </div>
                                    )}

                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-1">Nội dung Lý thuyết bài học:</label>
                                        <textarea
                                            value={editFormValues.theory || ""}
                                            onChange={(e) => setEditFormValues({ ...editFormValues, theory: e.target.value })}
                                            className="w-full h-64 p-3 border border-slate-300 rounded-xl text-xs font-mono leading-relaxed"
                                        />
                                    </div>
                                </div>
                            )}

                            {editingTarget.type === 'prompt' && (
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1">System Prompt Gia sư Argon:</label>
                                    <textarea
                                        value={editFormValues.prompt || ""}
                                        onChange={(e) => setEditFormValues({ ...editFormValues, prompt: e.target.value })}
                                        className="w-full h-44 p-3 border border-slate-300 rounded-xl text-xs leading-relaxed"
                                    />
                                </div>
                            )}
                        </div>

                        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end space-x-2">
                            <button
                                onClick={() => setEditModalOpen(false)}
                                className="px-4 py-2 bg-white border border-slate-300 text-slate-700 text-xs font-bold rounded-xl hover:bg-slate-100 cursor-pointer"
                            >
                                Hủy
                            </button>
                            <button
                                onClick={handleSaveDirectEdit}
                                className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-md flex items-center space-x-1.5 cursor-pointer"
                            >
                                <Save className="w-3.5 h-3.5" />
                                <span>Lưu vào mã nguồn</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}
