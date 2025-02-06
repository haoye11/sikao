[LaTeX公式语法大全](https://en.wikibooks.org/wiki/LaTeX/Mathematics)

一般公式分为两种形式，可以理解为一种特殊的代码块，

这是行内公式：`$ \Gamma(z) = \int_0^\infty t^{z-1}e^{-t}dt\,. $`

这是行内公式：$ \\Gamma(z) = \\int\_0^\\infty t<sup>{z-1}e</sup>{-t}dt,. $

这是块公式

```
$$\Gamma(z) = \int_0^\infty t^{z-1}e^{-t}dt\,.$$
```

这是块公式  
Γ ( z ) = ∫ 0 ∞ t z − 1 e − t d t &ThinSpace; . \\Gamma(z) = \\int\_0^\\infty t^{z-1}e^{-t}dt\\,. Γ(z)\=∫0∞tz−1e−tdt.

行公式，是在代码块的基础上前面加上`$`，后面加上`$`组成的。而块公式则是 输入`$$`和`$$`在公式前后。

接下来主要介绍数学公式中常用的一些符号。

## 一、希腊字母

如下表所示：

| 名称      | 大写  | Tex       | 小写  | Tex       |
| ------- | --- | --------- | --- | --------- |
| alpha   | A   | A         | α   | \\alpha   |
| beta    | B   | B         | β   | \\beta    |
| gamma   | Γ   | \\Gamma   | γ   | \\gamma   |
| delta   | Δ   | \\Delta   | δ   | \\delta   |
| epsilon | E   | E         | ϵ   | \\epsilon |
| zeta    | Z   | Z         | ζ   | \\zeta    |
| eta     | H   | H         | η   | \\eta     |
| theta   | Θ   | \\Theta   | θ   | \\theta   |
| iota    | I   | I         | ι   | \\iota    |
| kappa   | K   | K         | κ   | \\kappa   |
| lambda  | Λ   | \\Lambda  | λ   | \\lambda  |
| mu      | M   | M         | μ   | \\mu      |
| nu      | N   | N         | ν   | \\nu      |
| xi      | Ξ   | \\Xi      | ξ   | \\xi      |
| omicron | O   | O         | ο   | \\omicron |
| pi      | Π   | \\Pi      | π   | \\pi      |
| rho     | P   | P         | ρ   | \\rho     |
| sigma   | Σ   | \\Sigma   | σ   | \\sigma   |
| tau     | T   | T         | τ   | \\tau     |
| upsilon | Υ   | \\Upsilon | υ   | \\upsilon |
| phi     | Φ   | \\Phi     | ϕ   | \\phi     |
| chi     | X   | X         | χ   | \\chi     |
| psi     | Ψ   | \\Psi     | ψ   | \\psi     |
| omega   | Ω   | \\Omega   | ω   | \\omega   |

## 二、上标与下标

上标和下标分别使用`^`与`_`，例如`x_i^2`表示的是： x 2 i x\_2^i x2i。

默认情况下，上下标符号仅仅对下一个组起作用。一个组即单个字符或者使用`{..}`包裹起来的内容。也就是说，如果使用`10^10`表示的是 1 0 1 0 10^10 1010，而`10^{10}`才是 1 0 10 10^{10} 1010。同时，大括号还能消除二义性，如`x^5^6`将得到一个错误，必须使用大括号来界定^的结合性，如`{x^5}^6`： x 5 6 {x^5}^6 x56 或者 `x^{5^6}`： x 5 6 x^{5^6} x56。

## 三、括号

## 1、小括号与方括号

使用原始的( )，\[ \]即可，如`(2+3)[4+4]`： ( 2 + 3 ) \[ 4 + 4 \] (2+3)\[4+4\] (2+3)\[4+4\]

## 2、大括号

由于大括号`{}`被用来分组，因此需要使用`\{`和`\}`表示大括号，也可以使用`\lbrace` 和`\rbrace`来表示。如`\{a*b\}:a∗b`或`\lbrace a*b \rbrace:ａ*b`表示 { a ∗ b } : a ∗ b \\{a\*b\\}:a∗b {a∗b}:a∗b

## 3、尖括号

区分于小于号和大于号，使用`\langle`和`\rangle`表示左尖括号和右尖括号。如`\langle x \rangle`： ⟨ x ⟩ \\langle x \\rangle ⟨x⟩。

## 4、上取整

使用`\lceil` 和 `\rceil` 表示。 如，`\lceil x \rceil`： ⌈ x ⌉ \\lceil x \\rceil ⌈x⌉。

## 5、下取整

使用`\lfloor` 和 `\rfloor` 表示。如，`\lfloor x \rfloor`： ⌊ x ⌋ \\lfloor x \\rfloor ⌊x⌋。

## 四、求和与积分

## 1、求和

`\sum`用来表示求和符号，其下标表示求和下限，上标表示上限。如，`\sum_1^n`： ∑ 1 n \\sum\_1^n ∑1n。

## 2、积分

`\int`用来表示积分符号，同样地，其上下标表示积分的上下限。如，`\int_1^\infty`： ∫ 1 ∞ \\int\_1^\\infty ∫1∞。  
　　多重积分  
`\iint`： ∬ \\iint ∬  
`\iiint`： ∭ \\iiint ∭  
`\iiiint`：KaTeX parse error: Expected 'EOF', got '\\iiiint' at position 1: \\̲i̲i̲i̲i̲n̲t̲

## 3、其他

与此类似的符号还有，  
`\prod`： ∏ \\prod ∏，  
`\bigcup`: ⋃ \\bigcup ⋃，  
`\bigcap`： ⋂ \\bigcap ⋂。

## 五、分式与根式

## 1、分式

-   第一种，使用`\frac ab`，`\frac`作用于其后的两个组`a，b`，结果为 a b \\frac ab ba。如果你的分子或分母不是单个字符，请使用`{..}`来分组。
-   第二种，使用`\over`来分隔一个组的前后两部分，如`{a+1\over b+1}`： a + 1 b + 1 {a+1\\over b+1} b+1a+1。

## 2、连分数

书写连分数[表达式](https://so.csdn.net/so/search?q=%E8%A1%A8%E8%BE%BE%E5%BC%8F&spm=1001.2101.3001.7020)时，请使用`\cfrac`代替`\frac`或者`\over`两者效果对比如下：  
`\frac`表示如下：

```
x=a_0 + \frac {1^2}{a_1 + \frac {2^2}{a_2 + \frac {3^2}{a_3 + \frac {4^2}{a_4 + ...}}}}
```

显示如下：  
x = a 0 + 1 2 a 1 + 2 2 a 2 + 3 2 a 3 + 4 2 a 4 + . . . x=a\_0 + \\frac {1^2}{a\_1 + \\frac {2^2}{a\_2 + \\frac {3^2}{a\_3 + \\frac {4^2}{a\_4 + ...}}}} x\=a0+a1+a2+a3+a4+...42322212

`\cfrac`表示如下：

```
x=a_0 + \cfrac {1^2}{a_1 + \cfrac {2^2}{a_2 + \cfrac {3^2}{a_3 + \cfrac {4^2}{a_4 + ...}}}}
```

显示如下

x = a 0 + 1 2 a 1 + 2 2 a 2 + 3 2 a 3 + 4 2 a 4 + . . . x=a\_0 + \\cfrac {1^2}{a\_1 + \\cfrac {2^2}{a\_2 + \\cfrac {3^2}{a\_3 + \\cfrac {4^2}{a\_4 + ...}}}} x\=a0+a1+a2+a3+a4+...42322212

## 3、根式

根式使用`\sqrt`来表示。如，`\sqrt[4]{\frac xy}` ： x y 4 \\sqrt\[4\]{\\frac xy} 4yx 

## 六、多行表达式

## 1、分类表达式

定义函数的时候经常需要分情况给出表达式，可使用`\begin{cases}…\end{cases}`。其中，使用`\\`来分类，使用`&`指示需要对齐的位置，`\空格`表示空格 。如：

```
f(n)
\begin{cases}
\cfrac n2, &if\ n\ is\ even\\
3n + 1, &if\  n\ is\ odd
\end{cases}
```

表示

f ( n ) { n 2 , i f   n   i s   e v e n 3 n + 1 , i f   n   i s   o d d f(n)

$$
\begin{cases} \cfrac n2, &amp;if\ n\ is\ even\\ 3n + 1, &amp;if\ n\ is\ odd \end{cases}
$$

f(n)⎩⎨⎧2n,3n+1,if n is evenif n is odd

如果想分类之间的垂直间隔变大，可以使用`\\[2ex]`代替`\\`来分隔不同的情况。(`3ex,4ex`也可以用，`1ex`相当于原始距离）。如下所示：

```
f(n)
\begin{cases}
\cfrac n2, &if\n\ is\ even\\[5ex]
3n + 1, &if\  n\ is\ odd
\end{cases}
```

表示

f ( n ) { n 2 , i f   n   i s   e v e n 3 n + 1 , i f   n   i s   o d d f(n)

$$
\begin{cases} \cfrac n2, &amp;if\ n\ is\ even\\[5ex] 3n + 1, &amp;if\ n\ is\ odd \end{cases}
$$

f(n)⎩⎪⎪⎪⎨⎪⎪⎪⎧2n,3n+1,if n is evenif n is odd

## 2、多行表达式

有时候需要将一行公式分多行进行显示。

```
\begin{equation}\begin{split} 
a&=b+c-d \\ 
&\quad +e-f\\ 
&=g+h\\ 
& =i 
\end{split}\end{equation}
```

表示

KaTeX parse error: No such environment: equation at position 8: \\begin{̲e̲q̲u̲a̲t̲i̲o̲n̲}̲\\begin{split} a…

其中`begin{equation}`表示开始方程，`end{equation}`表示方程结束；`begin{split}`表示开始多行公式，`end{split}`表示结束；公式中用`\\`表示回车到下一行，`&`表示对齐的位置。

## 3、方程组

（1）使用`\begin{array}...\end{array}`与`\left \{`与`\right.`配合表示方程组

```
\left \{ 
\begin{array}{c}
a_1x+b_1y+c_1z=d_1 \\ 
a_2x+b_2y+c_2z=d_2 \\ 
a_3x+b_3y+c_3z=d_3
\end{array}
\right .
```

表示：  
{ a 1 x + b 1 y + c 1 z = d 1 a 2 x + b 2 y + c 2 z = d 2 a 3 x + b 3 y + c 3 z = d 3 \\left \\{

$$
\begin{array}{c} a_1x+b_1y+c_1z=d_1 \\ a_2x+b_2y+c_2z=d_2 \\ a_3x+b_3y+c_3z=d_3 \end{array}
$$

\\right . ⎩⎨⎧a1x+b1y+c1z\=d1a2x+b2y+c2z\=d2a3x+b3y+c3z\=d3

（2）直接使用`begin{cases}`和`end{cases}`表示，参考（1）,略

注意：通常MathJax通过内部策略自己管理公式内部的空间，因此a…b与a…….b（.表示空格）都会显示为ab。可以通过在ab间加入`\`,增加些许间隙，`\;`增加较宽的间隙，`\quad` 与 `\qquad` 会增加更大的间隙。

## 七、特殊函数与符号

## 1\. 三角函数

`\sinx`: sin ⁡ ⁡ x \\sin⁡x sin⁡x  
`\arctanx`: a r c t a n x arctanx arctanx

## 2\. 比较运算符

小于(`\lt`)： &lt; \\lt <  
大于(`\gt`)： &gt; \\gt \>  
小于等于(`\le`)： ≤ \\le ≤  
大于等于(`\ge`)： ≥ \\ge ≥  
不等于(`\ne`) : ≠ \\ne ̸\=

可以在这些运算符前面加上`\not`，如`\not\lt` : ̸ &lt; \\not\\lt ̸<

## 4\. 集合关系与运算

并集(`\cup`): ∪ \\cup ∪  
交集(`\cap`): ∩ \\cap ∩  
差集(`\setminus`): ∖ \\setminus ∖  
子集(`\subset`): ⊂ \\subset ⊂  
(`\subseteq`): ⊆ \\subseteq ⊆  
(`\subsetneq`): ⊊ \\subsetneq ⊊  
父集(`\supset`): ⊃ \\supset ⊃  
属于(`\in`): ∈ \\in ∈  
不属于(`\notin`): ∉ \\notin ∈/  
空集(`\emptyset`): ∅ \\emptyset ∅  
空(`\varnothing`): ∅ \\varnothing ∅

## 5\. 排列

`$\binom{n+1}{2k}$`： ( n + 1 2 k ) \\binom{n+1}{2k} (2kn+1)  
`${n+1 \choose 2k}$`： ( n + 1 2 k ) {n+1 \\choose 2k} (2kn+1)

## 6\. 箭头

(`\to`): → \\to →  
(`\rightarrow`): → \\rightarrow →  
(`\leftarrow`): ← \\leftarrow ←  
(`\Rightarrow`): ⇒ \\Rightarrow ⇒  
(`\Leftarrow`): ⇐ \\Leftarrow ⇐  
(`\mapsto`): ↦ \\mapsto ↦

## 7\. 逻辑运算符

`\land`: ∧ \\land ∧  
`\lor`: ∨ \\lor ∨  
`\lnot`: ¬ \\lnot ¬  
`\forall`: ∀ \\forall ∀  
`\exists`: ∃ \\exists ∃  
`\top`: ⊤ \\top ⊤  
`\bot`: ⊥ \\bot ⊥  
`\vdash`: ⊢ \\vdash ⊢  
`\vDash`: ⊨ \\vDash ⊨

## 8\. 操作符

(`\star`): ⋆ \\star ⋆  
(`\ast`): ∗ \\ast ∗  
(`\oplus`): ⊕ \\oplus ⊕  
(`\circ`): ∘ \\circ ∘  
(`\bullet`): ∙ \\bullet ∙

## 9\. 等于

(`\approx`): ≈ \\approx ≈  
(`\sim`): ∼ \\sim ∼  
(`\cong`): ≅ \\cong ≅  
(`\equiv`): ≡ \\equiv ≡  
(`\prec`): ≺ \\prec ≺

## 10\. 范围

(`\infty`): ∞ \\infty ∞  
(`\aleph_o`): ℵ o \\aleph\_o ℵo  
(`\nabla`): ∇ \\nabla ∇  
(`\partial`): ∂ \\partial ∂  
(`\Im`): ℑ \\Im ℑ  
(`\Re`): ℜ \\Re ℜ

## 11\. 模运算

`\pmod`: a ( m o d b ) a\\pmod b a(modb)  
如 `a \equiv b \pmod n` : a ≡ b ( m o d n ) a \\equiv b \\pmod n a≡b(modn)

## 12\. 点

`\ldots`: … \\ldots …  
`\cdots`: ⋯ \\cdots ⋯  
`\cdot`: ⋅ \\cdot ⋅

其区别是点的位置不同，`\ldots`位置稍低，`\cdots`位置居中。

a 1 + a 2 + … + a n , a 1 , a 2 , … , a n a 1 + a 2 + ⋯ + a n , a 1 , a 2 , ⋯ &ThinSpace; , a n a\_1+a\_2+\\ldots+a\_n,a1,a2,\\ldots,an \\\\ a\_1+a\_2+\\cdots+a\_n,a1,a2,\\cdots,an a1+a2+…+an,a1,a2,…,ana1+a2+⋯+an,a1,a2,⋯,an

## 八、顶部符号

对于单字符，`\hat x`： x ^ \\hat x x^，  
多字符可以使用`\widehat`： x y ^ \\widehat {xy} xy 

类似的还有  
`\overline`： x ‾ \\overline x x  
`\vec`： x ⃗ \\vec x x  
`\overrightarrow`： x → \\overrightarrow x x  
`\dot`： x ˙ \\dot x x˙  
`\ddot`： x ¨ \\ddot x x¨：

## 九、表格

使用`\begin{array}{列样式}…\end{array}`这样的形式来创建表格，列样式可以是`clr`表示居中，左，右对齐，还可以使用`|`表示一条竖线。表格中各行使用`\\`分隔，各列使用`&`分隔。使用`\hline`在本行前加入一条直线。 例如，

```
\begin{array}{c|lcr}
n & \text{Left} & \text{Center} & \text{Right} \\
\hline
1 & 0.24 & 1 & 125 \\
2 & -1 & 189 & -8 \\
3 & -20 & 2000 & 1+10i \\
\end{array}
```

结果：

n Left Center Right 1 0.24 1 125 2 − 1 189 − 8 3 − 20 2000 1 + 10 i

$$
\begin{array}{c|lcr} n &amp; \text{Left} &amp; \text{Center} &amp; \text{Right} \\ \hline 1 &amp; 0.24 &amp; 1 &amp; 125 \\ 2 &amp; -1 &amp; 189 &amp; -8 \\ 3 &amp; -20 &amp; 2000 &amp; 1+10i \\ \end{array}
$$

n123Left0.24−1−20Center11892000Right125−81+10i

## 十、矩阵

## 1、基本用法

使用`\begin{matrix}…\end{matrix}`这样的形式来表示矩阵，在`\begin`与`\end`之间加入矩阵中的元素即可。矩阵的行之间使用`\\`分隔，列之间使用`&`分隔。

例如

```
\begin{matrix}
1 & x & x^2 \\
1 & y & y^2 \\
1 & z & z^2 \\
\end{matrix}
```

结果：

1 x x 2 1 y y 2 1 z z 2

$$
\begin{matrix} 1 &amp; x &amp; x^2 \\ 1 &amp; y &amp; y^2 \\ 1 &amp; z &amp; z^2 \\ \end{matrix}
$$

111xyzx2y2z2

## 2、加括号

如果要对矩阵加括号，可以像上文中提到的一样，使用`\left`与`\right`配合表示括号符号。也可以使用特殊的matrix。即替换`\begin{matrix}…\end{matrix}`中的`matrix`为`pmatrix，bmatrix，Bmatrix，vmatrix, Vmatrix`。

（1）pmatrix: ( 1 2 3 4 )

$$
\begin{pmatrix}1&amp;2\\3&amp;4\end{pmatrix}
$$

(1324)  
（2）bmatrix: \[ 1 2 3 4 \]

$$
\begin{bmatrix}1&amp;2\\3&amp;4\end{bmatrix}
$$

\[1324\]  
（3）Bmatrix: { 1 2 3 4 }

$$
\begin{Bmatrix}1&amp;2\\3&amp;4\end{Bmatrix}
$${1324}  
（4）vmatrix: ∣ 1 2 3 4 ∣

$$
\begin{vmatrix}1&amp;2\\3&amp;4\end{vmatrix}
$$∣∣∣∣1324∣∣∣∣  
（5）Vmatrix: ∥ 1 2 3 4 ∥

$$
\begin{Vmatrix}1&amp;2\\3&amp;4\end{Vmatrix}
$$∥∥∥∥1324∥∥∥∥

## 3、省略元素

可以使用`\cdots`： ⋯ \\cdots ⋯，`\ddots`： ⋱ \\ddots ⋱，`\vdots`： ⋮ \\vdots ⋮来省略矩阵中的元素，如：

```
\begin{pmatrix}
1&a_1&a_1^2&\cdots&a_1^n\\
1&a_2&a_2^2&\cdots&a_2^n\\
\vdots&\vdots&\vdots&\ddots&\vdots\\
1&a_m&a_m^2&\cdots&a_m^n\\
\end{pmatrix}
```

结果如下：

( 1 a 1 a 1 2 ⋯ a 1 n 1 a 2 a 2 2 ⋯ a 2 n ⋮ ⋮ ⋮ ⋱ ⋮ 1 a m a m 2 ⋯ a m n )

$$
\begin{pmatrix} 1&amp;a_1&amp;a_1^2&amp;\cdots&amp;a_1^n\\ 1&amp;a_2&amp;a_2^2&amp;\cdots&amp;a_2^n\\ \vdots&amp;\vdots&amp;\vdots&amp;\ddots&amp;\vdots\\ 1&amp;a_m&amp;a_m^2&amp;\cdots&amp;a_m^n\\ \end{pmatrix}
$$

⎝⎜⎜⎜⎛11⋮1a1a2⋮ama12a22⋮am2⋯⋯⋱⋯a1na2n⋮amn⎠⎟⎟⎟⎞

## 4、增广矩阵

增广矩阵需要使用前面的表格中使用到的`\begin{array} ... \end{array}`来实现，

```
\left[
\begin{array}{cc|c}
1&2&3\\
4&5&6
\end{array}
\right]
```

结果：  
\[ 1 2 3 4 5 6 \] \\left\[

$$
\begin{array}{cc|c} 1&amp;2&amp;3\\ 4&amp;5&amp;6 \end{array}
$$

\\right\] \[142536\]

## 十一、公式标记与引用

使用`\tag{yourtag}`来标记公式，如果想在之后引用该公式，则还需要加上`\label{yourlabel}`在`\tag`之后，如：

```
a := x^2 - y^3 \tag{1}\label{1}
```

显示为，

KaTeX parse error: Expected 'EOF', got '\\label' at position 24: …2 - y^3 \\tag{1}\\̲l̲a̲b̲e̲l̲{1}

`\tab{yourtab}`中的内容用于显示公式后面的标记。公式之间通过`\label{}`设置的内容来引用。为了引用公式，可以使用`\eqref{yourlabel}`，如：

```
a + y^3 \stackrel{\eqref{1}}= x^2
```

显示为，

KaTeX parse error: Expected '}', got '\\eqref' at position 20: … y^3 \\stackrel{\\̲e̲q̲r̲e̲f̲{1}}= x^2

或者使用`\ref{yourlabel}`不带括号引用，如：

```
a + y^3 \stackrel{\ref{1}}= x^2
```

显示为，

KaTeX parse error: Expected '}', got '\\ref' at position 20: … y^3 \\stackrel{\\̲r̲e̲f̲{1}}= x^2

## 十二、字体

## 1、黑板粗体字

此字体经常用来表示代表实数、整数、有理数、复数的大写字母。  
`\mathbb CHNQRZ`： C H N Q R Z \\mathbb CHNQRZ CHNQRZ  
`\Bbb CHNQRZ`： C H N Q R Z \\Bbb CHNQRZ CHNQRZ

## 2、黑体字

`\mathbf ABCDEFGHIJKLMNOPQRSTUVWXYZ`： A B C D E F G H I J K L M N O P Q R S T U V W X Y Z \\mathbf ABCDEFGHIJKLMNOPQRSTUVWXYZ ABCDEFGHIJKLMNOPQRSTUVWXYZ  
`\mathbf abcdefghijklmnopqrstuvwxyz`： a b c d e f g h i j k l m n o p q r s t u v w x y z \\mathbf abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz

## 3、打印机字体

`\mathtt ABCDEFGHIJKLMNOPQRSTUVWXYZ`： A B C D E F G H I J K L M N O P Q R S T U V W X Y Z \\mathtt ABCDEFGHIJKLMNOPQRSTUVWXYZ ABCDEFGHIJKLMNOPQRSTUVWXYZ  
`\mathtt abcdefghijklmnopqrstuvwxyz`： a b c d e f g h i j k l m n o p q r s t u v w x y z \\mathtt abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz

## 4、罗马字体

`\mathrm abcdefghijklmnopqrstuvwxyz`： a b c d e f g h i j k l m n o p q r s t u v w x y z \\mathrm abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz

## 5、手写字体

`\mathscr abcdefghijklmnopqrstuvwxyz`： a b c d e f g h i j k l m n o p q r s t u v w x y z \\mathscr abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz

## 6、Fraktur字母（一种德国字体）

`\mathfrak ABCDEFGHIJKLMNOPQRSTUVWXYZ`： A B C D E F G H I J K L M N O P Q R S T U V W X Y Z \\mathfrak ABCDEFGHIJKLMNOPQRSTUVWXYZ ABCDEFGHIJKLMNOPQRSTUVWXYZ  
`\mathfrak abcdefghijklmnopqrstuvwxyz`： a b c d e f g h i j k l m n o p q r s t u v w x y z \\mathfrak abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz

## 十三、颜色

设置颜色，使用`\color{black}`标签,  
`\color{black}{text}`： t e x t \\color{black}{text} text  
`\color{gray}{text}`： t e x t \\color{gray}{text} text  
`\color{silver}{text}`： t e x t \\color{silver}{text} text  
`\color{white}{text}`： t e x t \\color{white}{text} text  
`\color{maroon}{text}`： t e x t \\color{maroon}{text} text  
`\color{red}{text}`： t e x t \\color{red}{text} text  
`\color{yellow}{text}`： t e x t \\color{yellow}{text} text  
`\color{lime}{text}`： t e x t \\color{lime}{text} text  
`\color{olive}{text}`： t e x t \\color{olive}{text} text  
`\color{green}{text}`： t e x t \\color{green}{text} text  
`\color{teal}{text}`： t e x t \\color{teal}{text} text  
`\color{aqua}{text}`： t e x t \\color{aqua}{text} text  
`\color{blue}{text}`： t e x t \\color{blue}{text} text  
`\color{navy}{text}`： t e x t \\color{navy}{text} text  
`\color{purple}{text}`： t e x t \\color{purple}{text} text  
`\color{fuchsia}{text}`： t e x t \\color{fuchsia}{text} text